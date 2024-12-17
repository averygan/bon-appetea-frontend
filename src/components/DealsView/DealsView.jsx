import React from 'react';
import VendorCard from '../VendorCard/VendorCard';
import DealsMap from '../DealsMap/DealsMap';
import BottomBanner from '../BottomBanner/BottomBanner';

function DealsView({ view }) {
  return (
    <div className="border-t-2 border-gray-200">
      {view === "list" ? (
        <>
          <VendorCard loadBadge={true} shuffle={true}/>
        </>
      ) : (
        <>
        <div className="flex flex-col h-[65vh]">
        <DealsMap/>
        </div>
        <BottomBanner text="Tap markers for more info" endpoint="/deals" bgColor="white">
          <>Over <span className="text-pink-600">10  deals</span> near you</>
        </BottomBanner>
        </>
      )}
    </div>
  );
}

export default DealsView;
