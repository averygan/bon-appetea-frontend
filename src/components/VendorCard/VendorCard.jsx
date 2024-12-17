import React, { useEffect, useState, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { MdPedalBike } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { VendorContext } from '../../contexts/VendorContext';
import styles from './VendorCard.module.css';

function VendorCard({ text, query = "" }) {
  const { vendors } = useContext(VendorContext);

  const filteredVendors = query
    ? vendors.filter(vendor => vendor.name.toLowerCase().includes(query.toLowerCase()))
    : vendors;

  return (
    <section className={styles["vendorSection"]}>
      <h1>{text}</h1>
      {filteredVendors.length > 0 ? (
        filteredVendors.map(vendor => (
          <Link key={vendor.id} to={"/vendors/" + vendor.id}>
            <article className={styles["vendorCard"]}>
              <img 
                src={`${vendor.listing}?width=400&height=225`} 
                alt={vendor.name} 
                loading="lazy" 
              />
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
                      <p>{"S$" + vendor.deliveryFee.toFixed(2)}</p>
                    </span>}
                </div>                             
              </section>
            </article>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center mt-10">
          <img 
            src="/assets/images/paupau-wink.png" 
            alt="Pau pau winking" 
            className="mx-auto w-40 h-40 object-contain" 
          />
          <p className="text-gray-500 mt-4 text-base">No restaurants found, try again</p>
        </div>
      )}
    </section>
  );
}

export default VendorCard;
