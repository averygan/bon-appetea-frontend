import React from 'react'
import DealsBanner from '../components/DealsBanner/DealsBanner'
import VendorCard from '../components/VendorCard/VendorCard'
import BottomBanner from '../components/BottomBanner/BottomBanner'

function DealsListPage() {
  return (
    <>
        <DealsBanner/>
        <VendorCard/>
        <BottomBanner text="Click for map view" img="paupau-gift" endpoint="/deals/map">
          <>Over <span className="text-pink-600">15 deals</span> near you!</>
        </BottomBanner>
    </>
  )
}

export default DealsListPage