import React from 'react'
import { Link } from 'react-router-dom'

function BottomBanner({text, endpoint, mb = "0px", bgColor="#FFF7FC", img="paupau-money", children}) {

  return (
      <Link 
        to={endpoint} 
        className={`flex items-center justify-center py-5 px-8 gap-3 border-t border-gray-300 sticky`}
        style={{ bottom: mb, backgroundColor: bgColor}}>
          <section className="text-left">
              <h1 className="text-xl font-bold">{children}</h1>
              <p className="text-pink-500 text-sm font-semibold mt-2">{text}</p>
          </section>
          <section className="flex justify-center items-center">
              <img 
                src={`/assets/images/${img}.png`}
                alt="Pau Pau holding an envelope of cash" 
                className="w-20 h-auto max-w-full" 
              />
          </section>
      </Link>
  )
}

export default BottomBanner
