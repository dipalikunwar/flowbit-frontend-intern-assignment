import { useMap } from "react-leaflet";
import { useEffect } from "react";
import * as L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

export default function GeocoderControl() {
  const map = useMap();

  useEffect(() => {
    // @ts-ignore — geocoder TS types not available
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: true,
    });

    geocoder.addTo(map);
  }, [map]);

  return null;
}
