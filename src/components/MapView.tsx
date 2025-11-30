import { MapContainer, TileLayer, useMap } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

// FlyTo Component
function FlyTo({ coords }: { coords: LatLngTuple }) {
  const map = useMap();
  map.flyTo(coords, 12);
  return null;
}

export default function MapView({ coords }: { coords: LatLngTuple }) {
  return (
    <MapContainer
      center={coords}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      {/* Base OSM Map */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* WMS Layer */}
      <TileLayer
        url="https://www.wms.nrw.de/geobasis/wms_nw_dop?service=WMS&request=GetMap&version=1.1.1&layers=nw_dop&format=image/png&transparent=false"
      />

      <FlyTo coords={coords} />
    </MapContainer>
  );
}
