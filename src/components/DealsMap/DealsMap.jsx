import React, { useContext } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LocationContext } from '../../contexts/LocationContext'
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import { VendorContext } from '../../contexts/VendorContext';
import styles from './DealsMap.module.css'
import { DishContext } from '../../contexts/DishContext';
import { calcMaxDiscount } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { IoMdTime } from 'react-icons/io';
import { MdPedalBike } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { DataContext } from '../../contexts/DataContext';

function DealsMap() {
    const LEAFLET_ACCESS_TOKEN = import.meta.env.VITE_LEAFLET_ACCESS_TOKEN
    let { location } = useContext(LocationContext)
    // let { vendors } = useContext(VendorContext)
    let { dishes } = useContext(DishContext)
    let userPosition = [location.lat, location.lng]

    let { vendors } = useContext(DataContext)

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
                <Popup>
                    <div className={styles["popupContentWrapper"]}> 
                        <section className={`${styles["popupContent"]} text-lg`}>You are here</section>
                    </div>
                </Popup>
        </Marker>
        { vendors.length > 0 && 
            vendors.map(vendor => (
                // <Marker key={vendor.id} position={[vendor.latitude, vendor.longitude]} icon={customIcon(`discounts-${calcMaxDiscount(dishes, vendor.id)}`)}>
                //     <Popup>
                //             <Link className={styles["popupContentWrapper"]} to={`/vendors/${vendor.id}`}>
                //                     <img src={vendor.listing + "?width=400&height=225"} alt={vendor.name}/>
                //                     <section>
                //                         <div className={styles["popupContentHeader"]}>
                //                             <h1>
                //                                 {calcMaxDiscount(dishes, vendor.id) > 0 ?
                //                                 <span className={styles["active"]}>{calcMaxDiscount(dishes, vendor.id)*100}% off </span> :
                //                                 <span>No </span>
                //                                 }
                //                                 closing deal
                //                             </h1>
                //                             <div>
                //                                 <FaStar /> <p className={styles["popupContentRating"]}>{vendor.ratings}</p> <span>({vendor.noOfReviews})</span>
                //                             </div>    
                //                         </div>
                //                         <div className={styles["popupContentName"]}>
                //                             @ {vendor.name}
                //                         </div>
                //                         <div className={styles["popupContentDelivery"]}>
                //                             {vendor.cuisine} &#8226;
                //                             <IoMdTime />{vendor.deliveryTime} &#8226;  
                //                             {vendor.deliveryFee === 0 ? 
                //                             <span className={styles["active"]}>
                //                                 <MdPedalBike /> <p>Free</p>
                //                             </span>
                //                             : 
                //                             <span>
                //                                 <MdPedalBike />
                //                                 <p>{"S$" + vendor.deliveryFee.toFixed(2)}</p>
                //                             </span>}
                //                         </div>
                //                     </section>
                //                 </Link>
                //             </Popup>
                // </Marker>
                <Marker position={[vendor.coordinates[0], vendor.coordinates[1]]}>
                    <Popup>
                        {vendor.name}
                    </Popup>
                </Marker>
            ))

        }
    </MapContainer>
  )
}

export default DealsMap