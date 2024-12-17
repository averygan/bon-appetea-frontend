import React from 'react';
import VendorCard from '../VendorCard/VendorCard';
import DealsMap from '../DealsMap/DealsMap';

function DealsView({ view }) {
  return (
    <div>
      {view === "list" ? (
        <>
          <VendorCard loadBadge={true}/>
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
