import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'

function MapTopBar() {
  return (
    <header className="py-[20px] px-[3vw] flex items-center border-b-[1px] border-[#DCDCDC] border-solid">
        <Link className="text-lg mr-[2vw]" to="/"><RxCross2 /></Link>
        <h1 className="text-lg font-bold">Closing deals</h1>
    </header>
  )
}

export default MapTopBar