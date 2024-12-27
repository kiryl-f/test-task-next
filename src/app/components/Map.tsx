import React, { useRef, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import styles from '../styles/Map.module.scss';  

interface MapProps {
  latitude: number;
  longitude: number;
}

const MapComponent: React.FC<MapProps> = ({ latitude, longitude }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([longitude, latitude]),
        zoom: 12,
      }),
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const markerLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(markerLayer);

    return () => {
      map.setTarget(undefined);
    };
  }, [latitude, longitude]);

  return <div ref={mapRef} className={styles['map-container']} />;
};

export default MapComponent;
