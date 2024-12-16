import React, { useContext } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LocationContext } from '../../contexts/LocationContext'
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import { VendorContext } from '../../contexts/VendorContext';
import { DataContext } from '../../contexts/DataContext';
import { DishContext } from '../../contexts/DishContext';
import { calcMaxDiscount } from '../../utils/utils';

function DealsMap() {
    const LEAFLET_ACCESS_TOKEN = import.meta.env.VITE_LEAFLET_ACCESS_TOKEN
    let { location } = useContext(LocationContext)
    let { vendors } = useContext(VendorContext)
    let { dishes } = useContext(DishContext)
    let userPosition = [location.lat, location.lng]

    const customIcon = (entity) => {
        return new Icon({
            iconUrl: `/assets/images/marker-${entity}.png`,
            iconSize: [60, 60] // size of the icon
        })
    }

  return (
    <MapContainer className="flex flex-1" center={userPosition} zoom={15} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={"https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=" + LEAFLET_ACCESS_TOKEN}
        />
        <Marker position={userPosition} icon={customIcon("user")}>
            <Popup>You are here!</Popup>
        </Marker>
        { vendors.length > 0 && 
            vendors.map(vendor => (
                <Marker key={vendor.id} position={[vendor.latitude, vendor.longitude]} icon={customIcon(`discounts-${calcMaxDiscount(dishes, vendor.id)}`)}>
                    <Popup>
                        <h1>{vendor.name}</h1>
                        <p>{calcMaxDiscount(dishes, vendor.id)}</p>
                    </Popup>
                </Marker>
            ))

        }
    </MapContainer>
  )
}

export default DealsMap