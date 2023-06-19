import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { useState, ListView, useEffect} from "react";
import { useSelector } from "react-redux"
import Layout from "../components/Layout";
import { Button } from "@nextui-org/react";
import { fetchFast } from "../js/fetchFun";
import { Grid } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { useMapEvent } from "react-leaflet/hooks";
import NewProduct from "../components/NewProduct";
import { fetchFun } from "../js/fetchFun"

export default function showMap(props) {
  const [addedMarker, setAddedMarker] = useState(null);
  const [showError, setShowError] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  const token = useSelector((state) => state.token.value);

  const [updateModal, setUpdateModal] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [companyProducts, setCompanyProducts] = useState([]);

  let products = props.products;

  useEffect(() =>{
    getProducts()
  }, [])

  const getProducts = async () => {
    const res2 = await fetchFun(`/getAllProducts`, "GET", {}, token);
    console.log(res2)
    setCompanyProducts(res2);
  };



  console.log(companyProducts)



  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const newMarker = { lat, lng };
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

  const locationCard = () => {
    return (
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Body>
          <Text>Text</Text>
        </Card.Body>
      </Card>
    );
  };

  const handleSubmit = () => {
    (async () => {
      let query = `/locationsearch&q=${encodeURIComponent(searchQ)}`;
      let res = await fetchFast(query, "GET");
      if (res["result"][0] === undefined) {
        if (addedMarker !== null) {
          setShowError(true);
        }
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
    if (addedMarker !== null) map.flyTo([addedMarker.lat, addedMarker.lng]);

    return null;
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

      {showError ? <Text blockquote>No Location Found</Text> : ""}

      <MapContainer
        style={{
          width: "80%",
          height: "70vh",
          marginTop: "4vh",
          zIndex: 1,
        }}
        center={[30, 31]}
        zoom={2}
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
        {console.log(products)}
        {products.map((product) => {
          return (
            <Marker
              key={product.field_product_id}
              position={[product.lat, product.lon]}
            >
              <Popup>
                <Grid.Container gap={1}>
                  <Grid>
                    <Button size="xs" color="primary" auto>
                      Delete
                    </Button>
                  </Grid>
                  <Grid>
                    <Button size="xs" color="primary" auto>
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
        />
      )}
    </div>
  );
}
