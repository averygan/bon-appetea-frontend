import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import ShopTopBar from '../components/ShopTopBar/ShopTopBar'
import FilterBar from '../components/FilterBar/FilterBar'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import VendorCard from '../components/VendorCard/VendorCard'

function FoodPage() {
  return (
    <>
      <ShopTopBar bgColor="#F70170" locColor="#FFFFFF" searchColor="#FFFFFF"/>
      <HomeBanner/>
      <FilterBar/>
      <VendorCard/>
      <div>Bottom Banner</div>
      <BottomNavBar/>
    </>
  )
}

export default FoodPage