import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from "axios";
import "./style.css"



export default () => {

    const [sharingpoints, setSharingpoints] = useState([])

    useEffect(() => {
        const fetchSharingPoints = async () => {
            const {data} = await axios.post("https://h3blmjtuol.execute-api.eu-central-1.amazonaws.com/Test/get-sharingpoint-map-data")
            setSharingpoints(data.data)
        }
        fetchSharingPoints()
    }, [])
    return (
        <MapContainer
            center={[50, 10]}
            zoom={6}
            maxZoom={16}
            minZoom={5}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {
                sharingpoints && sharingpoints.map((item, key) =>
                    <Marker position={[item.latitude, item.longitude]} key={key}>

                        <Popup>
                            Popup for any custom information.
                </Popup>
                    </Marker>
                )

            }

        </MapContainer>
    );
}
