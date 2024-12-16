import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DishContext = createContext();

function DishContextProvider({ children }) {
    const API_URL = import.meta.env.VITE_DEFAULT_API_URL
    const [dishes, setDishes] = useState([]);  // State to hold dishes data

    useEffect(() => {
        // Fetch data from API when the component mounts
        axios.get(API_URL + '/dishes')
            .then(response => {
                // Update state with the data from the API
                setDishes(response.data);
            })
            .catch(error => {
                console.error('Error fetching dishes data:', error);
            });
    }, []);  // Empty dependency array means this effect runs once when the component mounts

    return (
        <DishContext.Provider value={{dishes}}>
            {children}
        </DishContext.Provider>
    );
}

export default DishContextProvider;
