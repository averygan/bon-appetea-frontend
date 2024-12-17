import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
        <h1 className="text-[11rem] relative text-[#F70170] drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
            404
            <img src={`/assets/images/paupau-sleep.png`} alt="Pau Pau sleeping"
            className="absolute bottom-0 w-[68%] translate-x-[-50%] left-1/2"/>
        </h1>
        <p className="mt-[3vh] mb-[7vh] text-[#333333]">Page not found</p>
        <Link className="font-[600] text-white bg-[#F70170] py-[10px] px-[5vw] rounded-lg"to="/">Back to home</Link>
    </main>
  )
}

export default NotFound