import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
import { useState } from 'react'
import Layout from '../components/Layout';
import { Button } from "@nextui-org/react";
import { fetchFast, fetchFun } from '../js/fetchFun'
import { Grid } from '@nextui-org/react';


export default function showMap(props) {

    const [searchQ, setSearchQ] = useState()
    const [queryRes, setQueryRes] = useState()

    const handleSubmit = () => {
        (async() => {let query = `/locationsearch&q=${encodeURIComponent(searchQ)}`
        let res = await fetchFast(query, "GET")
        console.log(res['result'])
        
    })();
    
    }

    return (<div style={{justifyContent:'center'}}>
        <h1>Search Locations //{searchQ}</h1>
        <input onChange={((event) => {setSearchQ(event.target.value)})}></input>
        <Button className="element" onClick={handleSubmit}> Register </Button>
        <MapContainer style={{width: "90%", height: "70vh", marginTop: "4vh", zindex:"1"}} center={[50,12]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[50,12]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
    </div>);


}