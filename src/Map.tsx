import React from "react";
import "./styles.css";
import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position: LatLngExpression = [59.91174337077401, 10.750425582038146];

export default function Map() {
  //What map.getBounds() gives you:
  /* const bounds: LatLngBoundsExpression = {
    _southWest: { lat: -43.484812128916026, lng: -16.787109375000004 },
    _northEast: { lat: -6.35897532723566, lng: 24.697265625000004 }
  };*/

  // what the mapcontainer bounds prop wants:
  const bounds2: LatLngBoundsExpression = [
    [-43.484812128916026, -16.787109375000004],
    [-6.35897532723566, 24.697265625000004]
  ];
  return (
    <>
      <MapContainer bounds={bounds2} style={{ height: "100vh" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
