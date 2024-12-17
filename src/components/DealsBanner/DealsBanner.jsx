import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5'

function DealsBanner() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-pink-50 py-6 mb-4 px-[3vw] flex items-start">
      {/* Left: back button and title */}
      <div className="flex flex-col items-start gap-3">
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"
        >
          <IoArrowBackOutline className="text-2xl text-black" />
        </button>
        <h1 className="text-2xl font-bold text-black">Closing Deals</h1>
      </div>

      {/* Right: Pau pau banner image */}
      <img
        src="/assets/images/paupau-food.png"
        alt="Pau pau with food items in the background"
        className="absolute bottom-0 right-0 w-40 h-auto object-contain"
      />
    </div>
  )
}

export default DealsBanner
