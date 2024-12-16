import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import ShopTopBar from '../components/ShopTopBar/ShopTopBar'
import FilterBar from '../components/FilterBar/FilterBar'

function FoodPage() {
  return (
    <>
      <ShopTopBar bgColor="#F70170" locColor="#FFFFFF" searchColor="#FFFFFF"/>
      <HomeBanner/>
      <FilterBar/>
      <div>Vendor card</div>
      <div>Bottom Banner</div>
      <div>Footer Nav</div>
    </>
  )
}

export default FoodPage