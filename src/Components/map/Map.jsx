import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const customIcon = new Icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
	iconSize: [38, 38], // size of the icon
});

const markers = [
	{
		geocode: [30.03497, 31.56346],
		popUp: "Pick-up location",
	},
	{
		geocode: [29.98486, 31.1685],
		popUp: "Drop-off location",
	},
];

const Map = () => {
	return (
		<MapContainer center={markers[0].geocode} zoom={8}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{markers.map(marker => (
				<Marker position={marker.geocode} icon={customIcon}>
					<Popup>{marker.popUp}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default Map;
