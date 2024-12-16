import React, { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton'

function FilterBar() {
    const [activeFilter, setActiveFilter] = useState('All') 
    const filters = ['All', 'Sort', 'Nearby Deals', 'Cuisines']
    return (
        <div className="flex justify-evenly mb-4">
            {filters.map((filter) => (
                <FilterButton 
                    key={filter}
                    label={filter}
                    isActive={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                />
            ))}
        </div>
    )
}

export default FilterBar