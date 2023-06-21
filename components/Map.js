import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { useState, ListView, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { Button, Popover, Row } from "@nextui-org/react";
import { fetchFast } from "../js/fetchFun";
import { Grid } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { useMapEvent } from "react-leaflet/hooks";
import NewProduct from "../components/NewProduct";
import UpdateProduct from "../components/UpdateProduct";
import { fetchFun } from "../js/fetchFun";
import { useRouter } from "next/router";

export default function showMap(props) {
  const [addedMarker, setAddedMarker] = useState(null);
  const [showError, setShowError] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const token = useSelector((state) => state.token.value);

  const router = useRouter();
  const { Uid, Content } = router.query;

  const role = useSelector((state) => state.role.value);

  const [updateModal, setUpdateModal] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [companyProducts, setCompanyProducts] = useState([]);
  const [userProducts, setUserProducts] = useState(props.products);
  const [errorMsg, setErrorMsg] = useState("No Location Was Found");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res2 = await fetchFun(`/getAllProducts`, "GET", {}, token);
    console.log(res2);
    setCompanyProducts(res2);
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const newMarker = { lat, lng };
    if (role == 2 && userProducts.length >= 3) {
      console.log("someone has more than 3")
      setShowError(true);
      setErrorMsg(
        "Product limit 3 reached, Consider upgrading your account to premium to add more products or delete existing products"
      );
      return;
    }
    setAddedMarker(newMarker);
    let lat1 = newMarker["lat"].toFixed(3);
    let lng1 = newMarker["lng"].toFixed(3);
    setAddedMarker({
      lat: lat1,
      lng: lng1,
    });
    if (showError) {
      setShowError(false);
    }
  };

  const handleSubmit = () => {
    if (!searchQ) {
      setErrorMsg("Fill in a location please");
      setShowError(true);
      return;
    }

    if (role == 2 && userProducts.length >= 3) {
      console.log("someone has more than 3")
      setShowError(true);
      setErrorMsg(
        "Product limit 3 reached, Consider upgrading your account to premium to add more products or delete existing products"
      );
      return;
    }

    (async () => {
      let query = `/locationsearch&q=${encodeURIComponent(searchQ)}`;
      let res = await fetchFast(query, "GET");
      if (res["result"][0] === undefined) {
        setErrorMsg("No Location Was Found");
        setShowError(true);
        setAddedMarker(null);
      } else {
        setAddedMarker({
          lat: res["result"][0]["position"]["lat"].toFixed(3),
          lng: res["result"][0]["position"]["long"].toFixed(3),
        });
        setShowError(false);
      }
    })();
  };

  const MapClickHandler = () => {
    const map = useMapEvent({
      click: handleMapClick,
    });
    if (addedMarker !== null) {
      map.flyTo([addedMarker.lat, addedMarker.lng]);
    }

    return null;
  };

  const selectedUpdateHandle = (selectedp) => {
    setSelectedProduct(selectedp);
    setUpdateModal(true);
  };

  const selectedDeleteHandle = (selectedp) => {
    (async () => {
      const res = await fetchFun(
        `/deleteProjectContentElement`,
        "POST",
        {
          project_id: Content,
          field_product_id: selectedp["field_product_id"],
        },
        token
      );

      const index = userProducts.findIndex(
        (obj) => obj["field_product_id"] === selectedp["field_product_id"]
      );

      if (index !== -1) {
        // If a match is found, create a new state array with the replaced object
        const updatedState = [
          ...userProducts.slice(0, index),
          ...userProducts.slice(index + 1),
        ];

        setUserProducts(updatedState);
      }
    })();
  };

  return (
    <div>
      <h1>Products Map</h1>
      <Spacer x={2} />
      <Input
        style={{ width: "50vh" }}
        placeholder="Search location to add a new product"
        onChange={(event) => {
          setSearchQ(event.target.value);
        }}
      ></Input>

      <Spacer y={1.2} />

      <Button className="element" onClick={handleSubmit}>
        Search
      </Button>

      {showError ? <Text blockquote>{errorMsg}</Text> : ""}

      <MapContainer
        style={{
          width: "80%",
          height: "70vh",
          marginTop: "4vh",
          zIndex: 1,
        }}
        center={[30, 31]}
        zoom={4}
        doubleClickZoom={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler />

        {addedMarker !== null && (
          <Marker position={[addedMarker.lat, addedMarker.lng]}>
            <Popup>
              <Text>Latitude: {addedMarker.lat} </Text>
              <Text>Longitude: {addedMarker.lng}</Text>
              <Button
                size="xs"
                color="primary"
                auto
                onClick={() => setNewModal(true)}
              >
                Add a product to this location
              </Button>
            </Popup>
          </Marker>
        )}
        {console.log(userProducts)}
        {userProducts.map((product) => {
          return (
            <Marker
              key={product.field_product_id}
              position={[product.lat, product.lon]}
            >
              <Popup>
                <Grid.Container gap={1}>
                  <Grid>
                    <Text b>Latitude: {product.lat}</Text>
                  </Grid>
                  <Grid>
                    <Text b>Longitude: {product.lon}</Text>
                  </Grid>
                  <Grid>
                    <Popover placement="top">
                      <Popover.Trigger>
                        <Button size="xs" color="error" auto>
                          Delete
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content
                        css={{
                          borderRadius: "14px",
                          padding: "0.75rem",
                          maxWidth: "330px",
                        }}
                      >
                        <Row justify="center" align="center">
                          <Text b>Confirm</Text>
                        </Row>
                        <Row>
                          <Text>
                            Are you sure you want to delete this product ? This
                            action is irreversible
                          </Text>
                        </Row>
                        <Grid.Container
                          justify="space-between"
                          alignContent="flex-end"
                        >
                          <Grid>
                            <Button
                              size="xs"
                              color="error"
                              auto
                              onClick={() => selectedDeleteHandle(product)}
                            >
                              Yes Delete
                            </Button>
                          </Grid>
                        </Grid.Container>
                      </Popover.Content>
                    </Popover>
                  </Grid>
                  <Grid>
                    <Button
                      size="xs"
                      color="primary"
                      auto
                      onClick={() => selectedUpdateHandle(product)}
                    >
                      Update
                    </Button>
                  </Grid>
                </Grid.Container>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      {newModal && (
        <NewProduct
          show={{ newModal }}
          current={addedMarker}
          stateChanger={setNewModal}
          products={companyProducts}
          userProducts={userProducts}
          updateProducts={setUserProducts}
          setAddedMarker={setAddedMarker}
        />
      )}

      {updateModal && (
        <UpdateProduct
          show={{ updateModal }}
          stateChanger={setUpdateModal}
          products={companyProducts}
          userProducts={userProducts}
          updateProducts={setUserProducts}
          selectedP={selectedProduct}
        />
      )}
    </div>
  );
}
