import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const customIcon = new Icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
	iconSize: [38, 38], // size of the icon
});

const Map = ({
	dropOffLocation = {
		latitude: 29.98486,
		longitude: 31.1685,
	},
	pickUpLocation = {
		latitude: 30.03497,
		longitude: 31.56346,
	},
}) => {
	console.log(dropOffLocation, pickUpLocation);
	return (
		<MapContainer
			center={[(pickUpLocation.latitude + dropOffLocation.latitude) / 2, (pickUpLocation.longitude + dropOffLocation.longitude) / 2]}
			zoom={8}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[dropOffLocation.latitude, dropOffLocation.longitude]} icon={customIcon}>
				<Popup>Drop-off location</Popup>
			</Marker>
			<Marker position={[pickUpLocation.latitude, pickUpLocation.longitude]} icon={customIcon}>
				<Popup>Pick-up location</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
