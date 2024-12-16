import React, { useContext } from 'react'
import styles from './VendorCard.module.css'
import { FaStar } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { MdPedalBike } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { VendorContext } from '../../contexts/VendorContext'

function VendorCard({text}) {
    const { vendors } = useContext(VendorContext)
    console.log(vendors)

  return (
    <section className={styles["vendorSection"]}>
        {console.log(vendors)}
        <h1>{text}</h1>
        {vendors.map(
            vendor => (
                <Link key={vendor.id} to={"/vendors/" + vendor.id}>
                    <article className={styles["vendorCard"]}>
                        <img src={vendor.listing + "?width=400&height=225"} alt={vendor.name} loading="lazy"/>
                        <section>
                            <div className={styles["vendorTitle"]}>
                                <h2>{vendor.name}</h2>
                                <div>
                                    <FaStar /> <p>{vendor.ratings} <span>({vendor.noOfReviews})</span></p>
                                </div>    
                            </div>
                            <div className={styles["vendorTags"]}>
                                {vendor.price} • {vendor.cuisine} 
                            </div>
                            <div className={styles["vendorDelivery"]}> 
                                <IoMdTime />{vendor.deliveryTime} &#8226;  
                                {vendor.deliveryFee === 0 ? 
                                <span className={styles["active"]}>
                                    <MdPedalBike /> <p>Free</p>
                                </span>
                                : 
                                <span>
                                    <MdPedalBike />
                                    <p>{"S$" + vendor.deliveryFee}</p>
                                </span>}
                            </div>                             
                        </section>
                    </article>
                </Link>

            )
        )}
    </section>

  )
}

export default VendorCard