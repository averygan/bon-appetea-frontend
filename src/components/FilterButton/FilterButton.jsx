import React from 'react'
import { useNavigate } from 'react-router-dom'

function FilterButton({label, isActive, onClick}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (label === "Nearby Deals") {
            navigate("/deals")
        } else {
            onClick()
        }
    }
    
    return (
        <button 
            onClick={handleClick}
            className={`px-5 py-2 rounded-full ${isActive ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'} text-sm`}>
            {label}
        </button>
    )
}

export default FilterButton