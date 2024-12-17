import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import VendorTopBar from '../components/VendorTopBar/VendorTopBar'
import SearchBar from '../components/SearchBar/SearchBar'
import VendorDishes from '../components/VendorDishes/VendorDishes'

function VendorPage() {
    let { vendorID } = useParams()
    const [query, setQuery] = useState('');

  return (
    <div className="px-4 flex flex-col h-screen">
      <VendorTopBar id={vendorID}/>
      <SearchBar placeholder="Search" bgColor="#F0F0F0" setQuery={setQuery} query={query}/>
      <VendorDishes id={vendorID} searchQuery={query}/>
    </div>
  )
}

export default VendorPage