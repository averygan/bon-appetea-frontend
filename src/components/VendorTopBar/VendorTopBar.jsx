import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function VendorTopBar({ id }) {
    const { vendors } = useContext(DataContext);
    const vendor = vendors.find(vendor => vendor.id === id);

    return (
        <div className="bg-white py-3 my-2">
            {/* container for back button, logo, cart */}
            <div className="flex items-center justify-between">
                {/* back */}
                <Link to="/" className="flex items-center">
                    <IoArrowBackOutline className="text-2xl" />
                </Link>

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

                {/* TODO: cart */}
            </div>

            {/* vendor information */}
            {vendor && (
                <div className="mt-2 text-center">
                    <h1 className="text-sm font-bold">{vendor.name}</h1>
                    <div className="flex justify-center mt-1 items-center text-xs text-gray-500">
                        <span className="mr-2">{vendor.deliveryTime}</span>
                        <span className="mx-1">•</span>
                        <span className="text-pink-500 font-medium">
                            {vendor.deliveryFee === 0 ? 'Free delivery' : `$${vendor.deliveryFee}`}
                        </span>
                        <span className="mx-1">•</span>
                        <span className="text-yellow-500 font-medium">{vendor.ratings}</span>
                        <span className="ml-1 text-gray-500">({vendor.noOfReviews} ratings)</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VendorTopBar;
