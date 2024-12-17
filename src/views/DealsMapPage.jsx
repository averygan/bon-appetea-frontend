import React from 'react'
import MapTopBar from '../components/MapTopBar/MapTopBar'
import DealsMap from '../components/DealsMap/DealsMap'
import BottomBanner from '../components/BottomBanner/BottomBanner'

function DealsMapPage() {
  return (
    <main className="flex flex-col h-screen">
      <MapTopBar/>
      <DealsMap/>
      <BottomBanner  text="Tap markers for more info" bgColor="#ffffff" endpoint="/deals">
        <>Up to <span className="text-pink-600">50% off</span> closing deals</>
      </BottomBanner>
    </main>
  )
}

export default DealsMapPage
