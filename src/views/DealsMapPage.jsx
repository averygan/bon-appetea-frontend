import React from 'react'
import MapTopBar from '../components/MapTopBar/MapTopBar'
import DealsMap from '../components/DealsMap/DealsMap'
import BottomBanner from '../components/BottomBanner/BottomBanner'

function DealsMapPage() {
  return (
    <main className="flex flex-col h-screen">
      <MapTopBar/>
      <DealsMap/>
      <BottomBanner  text="Click on any markers to find out more" bgColor="#ffffff" endpoint="/deals"/>
    </main>
  )
}

export default DealsMapPage
