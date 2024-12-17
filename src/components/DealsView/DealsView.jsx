import React from 'react';
import VendorCard from '../VendorCard/VendorCard';
import DealsMap from '../DealsMap/DealsMap';

function DealsView({ view }) {
  return (
    <div className="border-t-2 border-gray-200">
      {view === "list" ? (
        <>
          <VendorCard loadBadge={true} shuffle={true}/>
        </>
      ) : (
        <div className="flex flex-col h-screen">
          <DealsMap/>
        </div>
      )}
    </div>
  );
}

export default DealsView;
