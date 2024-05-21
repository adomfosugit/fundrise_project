'use client'
import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap,Circle } from 'react-leaflet'


import mapboxgl from "mapbox-gl";
import { Card, CardContent } from "@/components/ui/card";



type Props = {}

const Geopoint = ({productDetails}: any) => {
  // const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  const mapContainer = useRef<HTMLDivElement>(null);
    


  useEffect(() => {
    // @ts-ignore
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",

        //@ts-ignore
        center: [coordinates.lng,coordinates.lat],
        zoom: 10,
        maxZoom: 12,
        

      });

      
      
      // Add your custom markers and lines here
      const marker = new mapboxgl.Marker(
      )
            .setLngLat([coordinates.lng, coordinates.lat])
            .addTo(map);
      
   
      
      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

    const {coordinates} = productDetails; 
    
    

    
    
  
 
  
  return (
  
      <div ref={mapContainer}
      style={{height:'400px', }} />

  
      


  )
}

export default Geopoint

{/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height:"50vh", width:"50vw"}}>
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<Circle center={[51.505, -0.09]} pathOptions={{fillColor:'blue'}} radius={100} />
  


</MapContainer>  */}