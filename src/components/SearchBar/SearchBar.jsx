import React from 'react'
import { IoSearch } from 'react-icons/io5';

function SearchBar({placeholder, bgColor, setQuery, query}) {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`relative flex items-center w-full border-none rounded-3xl`}
          style={{
            backgroundColor: bgColor,
            caretColor: "#F70170"}}
          >
      <IoSearch className="ml-3 text-[#505153]" />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className={`w-full py-1.5 pl-4 bg-transparent border-none rounded-3xl placeholder:text-sm focus:outline-none placeholder-[#666769]`}
      />
    </div>
  );
}

export default SearchBar 