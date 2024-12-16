import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

function BottomBanner({text, endpoint}) {

  return (
      <Link 
        to={endpoint} 
        className="flex items-center justify-center py-4 px-12 gap-3 bg-pink-50 border-t border-gray-300 sticky bottom-0">
          <section className="text-left">
              <h2 className="text-base">There are currently</h2>
              <h1 className="text-xl font-bold">over <span className="text-pink-600">20 deals</span> near you!</h1>
              <p className="text-pink-500 text-sm font-medium mt-2">{text}</p>
          </section>
          <section className="flex justify-center items-center">
              <img 
                src="/assets/images/paupau-money.png" 
                alt="Pau Pau holding an envelope of cash" 
                className="w-24 h-auto max-w-full" 
              />
          </section>
      </Link>
  )
}

export default BottomBanner
