import { SearchMapProps, ViewPort } from "../../types"; 
import { useState, useEffect } from "react";
import Map from "react-map-gl";

export const SearchMap = ({ longitude, latitude }: SearchMapProps) => {
  const [viewPort, setViewPort] = useState<ViewPort>({
    attributionControl: false,
    longitude: longitude,
    latitude: latitude,
    zoom: 5,
  });

  const [screenWidth, setScreenWidth] = useState<number>();

  useEffect(() => {
    setScreenWidth(() => {
      let width = window.innerWidth;
      const getWidth = width >= 768 ? 1280 : 420;

      return getWidth;
    })
  });

  useEffect(() => {
    setViewPort({
      attributionControl: false,
      longitude: longitude,
      latitude: latitude,
      zoom: viewPort.zoom,
    });
  }, [longitude, latitude]);

  return (
      <Map
        mapLib={import("mapbox-gl")}
        initialViewState={{ ...viewPort }}
        style={{ width: screenWidth, height: 420}}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN} />
  );
};

