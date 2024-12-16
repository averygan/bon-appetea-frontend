import React from 'react'
import { useParams } from 'react-router-dom'
import VendorTopBar from '../components/VendorTopBar/VendorTopBar'
import SearchBar from '../components/SearchBar/SearchBar'
import VendorDishes from '../components/VendorDishes/VendorDishes'

function VendorPage() {
    let { vendorID } = useParams()

  return (
    <div className="px-4">
      <VendorTopBar id={vendorID}/>
      <SearchBar placeholder="Search" bgColor="bg-gray-100"/>
      <VendorDishes id={vendorID}/>
    </div>
  )
}

export default VendorPage