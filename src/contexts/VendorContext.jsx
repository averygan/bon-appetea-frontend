import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VendorContext = createContext();

function VendorContextProvider({ children }) {
    const API_URL = import.meta.env.VITE_DEFAULT_API_URL
    const [vendors, setVendors] = useState([]);  // State to hold vendors data

    useEffect(() => {
        // Fetch data from API when the component mounts
        axios.get(API_URL + '/vendors')
            .then(response => {
                // Update state with the data from the API
                setVendors(response.data);
            })
            .catch(error => {
                console.error('Error fetching vendors data:', error);
            });
    }, []);  // Empty dependency array means this effect runs once when the component mounts

    return (
        <VendorContext.Provider value={{vendors}}>
            {children}
        </VendorContext.Provider>
    );
}

export default VendorContextProvider;
