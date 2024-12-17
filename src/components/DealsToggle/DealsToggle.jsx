import React from 'react';

function ToggleSwitch({ selected, setSelected }) {
  const handleToggle = (type) => {
    setSelected(type);
  };

  return (
    <div className="flex px-2 border-b border-gray-300 py-2 mx-auto">
      <button
        onClick={() => handleToggle('list')}
        className={`w-1/2 text-center py-1 text-base font-bold ${
          selected === 'list' ? 'bg-white text-bold' : 'text-gray-500'
        }`}
      >
        List
      </button>
      <button
        onClick={() => handleToggle('map')}
        className={`w-1/2 text-center py-1 text-base font-bold ${
          selected === 'map' ? 'bg-white text-bold' : 'text-gray-500'
        }`}
      >
        Map
      </button>
    </div>
  );
}

export default ToggleSwitch;
