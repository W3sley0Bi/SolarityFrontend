import { Modal, Input, Text, Button, Dropdown } from "@nextui-org/react";
import { useState, ListView, useMemo } from "react";
import { fetchFast, fetchFun } from '../js/fetchFun'
import { useRouter } from "next/router";
import { useSelector } from "react-redux"

export default function UpdateProduct(props) {

    let selectedProduct = props.selectedP
  
  const handler = () => setVisible(true);

  const token = useSelector((state) => state.token.value);

  const router = useRouter();
  const { Uid, Content } = router.query;

  const [selected, setSelected] = useState(new Set([selectedProduct.company_product_id]));
  const [error, setError] = useState("");

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  // params
  const [tiltAngle, setTiltAngle] = useState(selectedProduct.tilt);
  const [visible, setVisible] = useState(props.show);
  const [lng, setLng] = useState(selectedProduct.lon);
  const [lat, setLat] = useState(selectedProduct.lat);
  const [orientation, setOrientation] = useState(selectedProduct.orientation);

  const closeHandler = () => {
    setVisible(false);
    props.stateChanger(false);
    console.log("closed");
  };

  const updateProduct = () => {
    setError("");

    if (
      !lat ||
      !lng ||
      selected.values().next().value === "Choose_Product" ||
      orientation === "" || !tiltAngle || orientation === undefined
    ) {
      setError("Missing Values");
      return
    }

    console.log(lat);
    if (lat < -90 || lat > 90) {
      setError("Latitude Must Be A Value Between -90 and 90");
      return;
    }
    if (lng < -180 || lng > 180) {
      setError("Longitude Must Be A Value Between -180 and 180");
      return;
    }
    console.log(orientation)
    if (orientation.charAt(0).toUpperCase() !== "S" && orientation.charAt(0).toUpperCase() !== "N" &&
    orientation.charAt(0).toUpperCase() !== "E" && orientation.charAt(0).toUpperCase() !== "W") {
        setError("Orientation Must Be A Value Of The Following: S, W, N, E");
        return;
      }
    // io check
    if (tiltAngle < 0 || tiltAngle > 90) {
      setError("Tilt Angle Must Be Between 0 and 90 degrees");
      return;
    }



    (async() => {

        const utc = await fetchFast(
            `/getUTC&q=${lat},${lng}`,
            "GET",
          );
        console.log(utc)
        console.log(selectedProduct.field_product_id)

        const updateP = {   
            "company_product_id": selected.values().next().value,
            "lat": lat,
            "lon": lng,
            "orientation" : orientation.charAt(0).toUpperCase(),
            "tilt": tiltAngle,
            "utc_offset": utc,
            "field_product_id": selectedProduct['field_product_id']
        }

        const res = await fetchFun(
            `/userFolder/${Uid}/${Content}/updateProduct`,
            "POST",
            updateP,
            token
        );

        if (res['message'] === "Product Updated") {
            // The request was successful (status code 2xx)
            console.log("Call succeeded!");
            console.log("closed");


            const index = props.userProducts.findIndex(obj => obj['field_product_id'] === updateP['field_product_id']);

            if (index !== -1) {
              // If a match is found, create a new state array with the replaced object
              const updatedState = [
                ... props.userProducts.slice(0, index),
                updateP,
                ... props.userProducts.slice(index + 1)
              ];

              props.updateProducts(updatedState)

            setVisible(false);
            props.stateChanger(false);


          } }else {

          }
          
        

    })();

  };

  console.log(props.products);

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" b size={18}>
          Add PV Product
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text blockquote>{error}</Text>
        <Input
          bordered
          initialValue={selectedProduct.lat}
          fullWidth
          color="primary"
          size="lg"
          placeholder="between -90 and  90"
          label="Latitude"
          type="number"
          onChange={(e) => setLat(e.target.value)}
        />
        <Input
          bordered
          initialValue={selectedProduct.lon}
          fullWidth
          color="primary"
          size="lg"
          placeholder="between -180 and 180"
          label="Longitude"
          type="number"
          onChange={(e) => setLng(e.target.value)}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="S, W, N, E"
          onChange={(e) => setOrientation(e.target.value)}
          label="PV Module Orientation"
          maxLength={1}
          initialValue={selectedProduct.orientation}
        />
        <Input
          onChange={(e) => setTiltAngle(e.target.value)}
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="0-90"
          label="PV Module Tilt Angle"
          type="number"
          initialValue={selectedProduct.tilt}
          min="0"
          max="90"
        />
        <Dropdown>
          <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            defaultSelectedKeys="Choose_Product"
            color="secondary"
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <Dropdown.Item key="Choose_Product">
              Choose PV Product
            </Dropdown.Item>
            {props.products.map((product) => {
              return (
                <Dropdown.Item key={product.product_id}>
                  {product.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={updateProduct}>
          Update Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
