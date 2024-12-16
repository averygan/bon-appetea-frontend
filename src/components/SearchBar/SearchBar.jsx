import React from 'react'
import { IoSearch } from 'react-icons/io5';

function SearchBar({placeholder}) {
  return (
    <div className={`relative flex items-center w-full bg-white border-none rounded-3xl`}>
      <IoSearch className="ml-3 text-[#505153]" />
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full py-1.5 pl-2 bg-transparent border-none rounded-3xl placeholder:text-sm focus:outline-none placeholder-[#666769]`}
      />
    </div>
  );
}

export default SearchBar 