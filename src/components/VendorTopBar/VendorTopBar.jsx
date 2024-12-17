import React, { useContext } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { TbShoppingBag } from 'react-icons/tb'
import { VendorContext } from '../../contexts/VendorContext';
import { IoMdTime } from 'react-icons/io';
import { MdPedalBike } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

function VendorTopBar({ id }) {
    const { vendors } = useContext(VendorContext)
    const navigate = useNavigate();

    const vendor = vendors.find(vendor => String(vendor.id) === String(id))

    return (
        <div className="bg-white py-3 my-2">
            {/* container for back button, logo, cart */}
            <div className="flex items-center justify-between">
                {/* back */}
                <button onClick={() => navigate(-1)} className="flex items-center">
                    <IoArrowBackOutline className="text-2xl" />
                </button>

                {/* vendor logo */}
                {vendor && (
                    <div className="w-12 h-12">
                        <img
                            src={vendor.logo + "?width=300&height=300"}
                            alt={`${vendor.name} Logo`}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                )}

            <TbShoppingBag className="text-2xl" />
        </div>

            {/* vendor information */}
            {vendor && (
                <div className="mt-2 text-center">
                    <h1 className="text-sm font-bold">{vendor.name}</h1>
                    <div className="flex justify-center mt-1 items-center text-xs text-gray-500">
                        <span className="flex items-center"><IoMdTime className="mr-[3px]"/>{vendor.deliveryTime}</span>
                        <span className="mx-1">&#8226;</span>
                        <span className={`flex items-center font-medium ${vendor.deliveryFee === 0 ? 'text-pink-500' : 'text-gray-500'}`}>
                            <MdPedalBike className="mr-[3px]"/>
                            {vendor.deliveryFee === 0 ? 'Free delivery' : `$${vendor.deliveryFee.toFixed(2)}`}
                        </span>
                        <span className="mx-1">&#8226;</span>
                        <span className="font-medium flex items-center text-black font-[500]"><FaStar className="text-yellow-500 mr-[3px]"/>{vendor.ratings}</span>
                        <span className="ml-1 text-gray-500">({vendor.noOfReviews} ratings)</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VendorTopBar;
