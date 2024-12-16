import React from 'react'
import { useParams } from 'react-router-dom'
import VendorTopBar from '../components/VendorTopBar/VendorTopBar'
import SearchBar from '../components/SearchBar/SearchBar'

function VendorPage() {
    let { vendor_id } = useParams()

  return (
    <div className="px-4">
      <VendorTopBar id={vendor_id}/>
      <SearchBar placeholder="Search" bgColor="bg-gray-100" />
    </div>
  )
}

export default VendorPage