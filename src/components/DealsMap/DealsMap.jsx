import React, { useContext } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationContext } from '../../contexts/LocationContext'
import "leaflet/dist/leaflet.css";

function DealsMap() {
    const LEAFLET_ACCESS_TOKEN = import.meta.env.VITE_LEAFLET_ACCESS_TOKEN
    let { location } = useContext(LocationContext)
    let userPosition = [location.lat, location.lng]

  return (
    <MapContainer className="flex flex-1" center={userPosition} zoom={15} scrollWheelZoom={true}>
        {console.log(LEAFLET_ACCESS_TOKEN)}
        <TileLayer
        attribution='&copy; <a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={"https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=" + LEAFLET_ACCESS_TOKEN}
        />
    </MapContainer>
  )
}

export default DealsMap