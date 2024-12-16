import React from 'react'
import DealsBanner from '../components/DealsBanner/DealsBanner'
import VendorCard from '../components/VendorCard/VendorCard'
import BottomBanner from '../components/BottomBanner/BottomBanner'

function DealsListPage() {
  return (
    <>
        <DealsBanner/>
        <VendorCard/>
        <BottomBanner text="Tap here for map view" bgColor="#ffffff"/>
    </>
  )
}

export default DealsListPage