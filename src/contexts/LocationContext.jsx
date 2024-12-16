import React, { createContext, useState } from 'react'
import.meta.env.REACT_APP_DEFAULT_LATITUDE

export const LocationContext = createContext()

function LocationContextProvider({children}) {
    let location = {
        lat: import.meta.env.VITE_DEFAULT_LATITUDE,
        lng: import.meta.env.VITE_DEFAULT_LONGITUDE,
        name: import.meta.env.VITE_DEFAULT_NAME,
        block: import.meta.env.VITE_DEFAULT_BLOCK,
        road: import.meta.env.VITE_DEFAULT_ROAD,
        postalCode: import.meta.env.VITE_DEFAULT_POSTALCODE,
    }
  
    return (
        <LocationContext.Provider value={{ location }}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider;