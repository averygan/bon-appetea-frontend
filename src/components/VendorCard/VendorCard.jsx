import { React, useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { MdPedalBike } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { DishContext } from '../../contexts/DishContext';
import { VendorContext } from '../../contexts/VendorContext';
import styles from './VendorCard.module.css';
import Badge from '../Badge/Badge';
import { calcMaxDiscount } from '../../utils/utils';

function VendorCard({ text, query = "", loadBadge, shuffle=false }) {
  const { vendors } = useContext(VendorContext);
  const { dishes } = useContext(DishContext)
  let [vendorsState, setVendors] = useState([])

    // Shuffle vendors when shuffle prop is true
    useEffect(() => {
      if (vendors.length == 0) {
        setVendors(vendors);
      } else if (shuffle) {
        const vendorsCopy = [...vendors];  // Create a shallow copy of the vendors array
        [vendorsCopy[0], vendorsCopy[4]] = [vendorsCopy[4], vendorsCopy[0]]; 
        setVendors(vendorsCopy);
      } else {
        setVendors(vendors);
      }
    }, [shuffle, vendors]);

  const filteredVendors = query
    ? vendorsState.filter(vendor => vendor.name.toLowerCase().includes(query.toLowerCase()))
    : vendorsState;

  return (
    <section className={`${styles["vendorSection"]} flex-1 flex flex-col justify-center`} >
      <h1>{text}</h1>
      {filteredVendors.length > 0 ? (
        filteredVendors.map(vendor => (
          <Link className="flex-1" key={vendor.id} to={"/vendors/" + vendor.id}>
            <article className={styles["vendorCard"]}>
                <div className="relative">
                    <img 
                        src={`${vendor.listing}?width=400&height=225`} 
                        alt={vendor.name} 
                        loading="lazy" 
                    />
                    {loadBadge && (
                        <div className="absolute top-2 right-2">
                            <Badge text={`${calcMaxDiscount(dishes, vendor.id) * 100}% closing deal`} />
                        </div>
                    )}
                </div>
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
        <div className="col-span-full text-center mt-10 flex-1 flex flex-col justify-center pb-[40px]">
          <img 
            src="/assets/images/paupau-wink.png" 
            alt="Pau pau winking" 
            className="mx-auto w-40 h-40 object-contain" 
            loading= "lazy"
          />
          <p className="text-gray-500 mt-4 text-base">No restaurants found, try again</p>
        </div>
      )}
    </section>
  );
}

export default VendorCard;
