import "leaflet";

declare module "react-leaflet" {
  interface TileLayerProps {
    params?: Record<string, any>;
  }
}
