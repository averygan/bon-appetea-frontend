import { React, useState } from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import ShopTopBar from '../components/ShopTopBar/ShopTopBar'
import FilterBar from '../components/FilterBar/FilterBar'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import VendorCard from '../components/VendorCard/VendorCard'
import BottomBanner from '../components/BottomBanner/BottomBanner'

function FoodPage() {
  const [query, setQuery] = useState('');

  return (
    <main className="flex flex-col h-screen">
      <ShopTopBar bgColor="#F70170" locColor="#FFFFFF" searchColor="#FFFFFF" setQuery={setQuery} query={query}/>
      <HomeBanner/>
      <FilterBar/>
      <VendorCard text="Explore restaurants" query={query} loadBadge={false}/>
      <BottomBanner text="Hurry! Limited time offer" endpoint="/deals" mb="90px">
        <>Save <span className="text-pink-600">50% off</span> closing deals</>
      </BottomBanner>
      <BottomNavBar/>
    </main>
  )
}

export default FoodPage