import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import ShopTopBar from '../components/ShopTopBar/ShopTopBar'

function FoodPage() {
  return (
    <>
      <ShopTopBar bgColor="#F70170" locColor="#FFFFFF" searchColor="#FFFFFF"/>
      <HomeBanner/>
      <div>Filter bar</div>
      <div>Vendor card</div>
      <div>Bottom Banner</div>
      <div>Footer Nav</div>
    </>
  )
}

export default FoodPage