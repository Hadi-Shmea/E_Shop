"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

// Fix default marker icon issue in Leaflet + Next.js
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export function CustomerGrowthMap() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <MapContainer
        center={[-2.5, 118]} // Centered on Indonesia
        zoom={4}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Example Provinces */}
        <Marker position={[-7.25, 112.75]} icon={markerIcon}>
          <Popup>East Java (50%)</Popup>
        </Marker>

        <Marker position={[-1.61, 113.61]} icon={markerIcon}>
          <Popup>Kalimantan (50%)</Popup>
        </Marker>

        <Marker position={[-8.65, 115.22]} icon={markerIcon}>
          <Popup>Bali (65%)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
