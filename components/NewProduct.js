import { Modal, Input, Text, Row, Button, Dropdown} from "@nextui-org/react";
import { useState, ListView , useMemo} from "react";

export default function NewProduct(props) {
  const handler = () => setVisible(true);

  const [selected, setSelected] = useState(new Set(["Choose PV Product"]));

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const [visible, setVisible] = useState(props.show);

  let location = props.current;

  const closeHandler = () => {
    setVisible(false);
    props.stateChanger(false);
    console.log("closed");
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to
          <Text b size={18}>
            {location.lat}
            {location.lng}
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          initialValue={location.lat}
          fullWidth
          color="primary"
          size="lg"
          placeholder="Latitude"
          label="Latitude"
        />
        <Input
          clearable
          bordered
          initialValue={location.lng}
          fullWidth
          color="primary"
          size="lg"
          placeholder="Longitude"
          label="Longitude"
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Orientation"
          label="PV Module Orientation"
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Tilt Angle"
          label="PV Module Tilt Angle"
        />
        <Dropdown>
          <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            defaultSelectedKeys= "ChooseProduct"
            color="secondary"
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <Dropdown.Item key="Choose Product">Choose Product</Dropdown.Item>
            <Dropdown.Item key="A">A</Dropdown.Item>
            <Dropdown.Item key="B">B</Dropdown.Item>
            <Dropdown.Item key="C">C</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={closeHandler}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
