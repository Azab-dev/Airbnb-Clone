"use client";
import React from "react";
import { searchResultData } from "@/app/types/app";
import { getCenter } from "geolib";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import dynamic from "next/dynamic";
import L from "leaflet";

const customMarkerIcon = L.icon({
  iconUrl: "/gif.gif",
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const Map = ({ searchResultData }: { searchResultData: searchResultData }) => {
  const coordinates = searchResultData.map(() => ({
    latitude: 51.2324,
    longitude: -0.1278,
  }));

  const center = getCenter(coordinates) as {
    latitude: number;
    longitude: number;
  };

  return (
    <div className="h-full">
      <MapContainer
        center={[center.latitude, center.longitude]}
        zoom={11}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
        />
        {searchResultData &&
          searchResultData.map((listing, index) => (
            <div key={index} className="animate-bounce">
              <Marker
                key={index}
                position={[listing.lat, listing.long]}
                icon={customMarkerIcon}
              >
                <Popup>
                  {listing.title || `Lat: ${listing.lat}, Lng: ${listing.long}`}
                </Popup>
              </Marker>
            </div>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
