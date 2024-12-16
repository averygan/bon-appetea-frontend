import React from 'react'

function FilterButton({label, isActive, onClick}) {
    return (
        <button 
            onClick={onClick}
            className={`px-5 py-2 rounded-full ${isActive ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'} text-sm`}>
            {label}
        </button>
    )
}

export default FilterButton