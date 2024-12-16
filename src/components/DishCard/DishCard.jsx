import React from 'react';

function DishCard({ dish }) {
  return (
    <div className="flex flex-row-reverse items-center border-b border-gray-200 py-3">
      {/* Dish img */}
      <div className="relative w-24 h-24 ml-4">
        <img
          src={dish.image + "?width=450&height=450"}
          alt={dish.name}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
        <button
          className="absolute bottom-1 right-1 rounded-full text-2xl">
          <img
            src='/assets/images/plus-icon.png'
            alt="Add"
            className="w-6 h-6 rounded-full object-contain"
          />        
        </button>
      </div>
      
      {/* Dish info */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{dish.name}</h3>
        <div>
          {dish.discount > 0 &&
              <span className="text-sm text-[#D70067]">from S${(dish.price*(1-dish.discount)).toFixed(2)} </span>
          }
          <span className={`text-gray-500 ${dish.discount > 0 ? "text-xs line-through" : "text-sm"}`}>S${dish.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2">{dish.description}</p>
      </div>
    </div>
  );
}

export default DishCard;
