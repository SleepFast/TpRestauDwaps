import React from "react";
import styles from "./LeafletMap.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = () => (
	<MapContainer
		center={[43.61181, 3.879000]}
		zoom={13}
		scrollWheelZoom={false}
		className={styles.LeafletMap}
	>
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		<Marker position={[43.6132946, 3.887459]}>
			<Popup className={styles.LeafletMapPopup}>
      <strong>restaurant </strong>: DwapsFood <br/>
        <strong>adresse </strong>: Antigone, 34000 Montpellier
			</Popup>
		</Marker>
	</MapContainer>
);

export default LeafletMap;
