import React from 'react';

function ToggleSwitch({ selected, setSelected }) {
  const handleToggle = (type) => {
    setSelected(type);
  };

  return (
  <div className="flex px-[21vw] py-2 mx-auto justify-between mx-[21vw]">
    <button
      onClick={() => handleToggle('list')}
      className={`text-center py-1 text-base font-bold relative ${
        selected === 'list' ? 'bg-white text-bold border-b-2 border-black' : 'text-gray-500'
      }`}
    >
      List
    </button>
    <button
      onClick={() => handleToggle('map')}
      className={`text-center py-1 text-base font-bold relative ${
        selected === 'map' ? 'bg-white text-bold border-b-2 border-black' : 'text-gray-500'
      }`}
    >
      Map
    </button>
  </div>
  );
}

export default ToggleSwitch;
