import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Button } from "@nextui-org/react";
import { fetchFast } from "../js/fetchFun";
import { Grid } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
<<<<<<< HEAD
import 'leaflet/dist/leaflet.css';
=======
// import "leaflet/dist/images/marker-shadow.png";
>>>>>>> 864e209888b55b3f699a053141d7c42e96fc4192


export default function showMap(props) {

  const [searchQ, setSearchQ] = useState();
  const [queryRes, setQueryRes] = useState();
  const [foundLocation, setFound] = useState(false);
  const [firstSearch, setFirstSearch] = useState(true);

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
      console.log(res["result"][0]);
      if (res["result"][0] === undefined) {
        setFound(false);
        setQueryRes(undefined);
        setFirstSearch(false);
      } else {
        setQueryRes(res["result"][0]);
        setFirstSearch(false);
        setFound(true);
      }
    })();
  };

  return (
    <div>
      <h1>Search Locations</h1>
      <Spacer x={2} />
      <Input
        placeholder="Address Search"
        onChange={(event) => {
          setSearchQ(event.target.value);
        }}
      ></Input>

      <Spacer y={1.2} />

      <Button className="element" onClick={handleSubmit}>
        Search
      </Button>
      <Spacer y={1.2} />

      {!firstSearch && !foundLocation ? <Text blockquote>No Location Found</Text> : ""}

      <MapContainer
        style={{
          width: "90%",
          height: "70vh",
          marginTop: "4vh",
          zIndex: 1,
        }}
        center={[50, 12]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {foundLocation && queryRes != undefined && (
          <Marker
            position={[
              queryRes["position"]["lat"],
              queryRes["position"]["long"],
            ]}
            >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}


