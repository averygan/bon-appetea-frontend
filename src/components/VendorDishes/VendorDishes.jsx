import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import DishCard from '../DishCard/DishCard'; 
import { FaFire } from 'react-icons/fa6';

function VendorDishes({ id }) {
  const { dishes } = useContext(DataContext);
  const filteredDishes = dishes?.filter(dish => dish.vendor_id === id) || [];

  return (
    <div>
      <h2 className="text-xl font-semibold mt-5 mb-2 flex items-center">
        <FaFire className="mr-2" style={{ color: '#D70F64' }} />
        Closing Deals
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {filteredDishes.length > 0 ? (
          filteredDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No dishes available for this vendor.
          </p>
        )}
      </div>
    </div>
  );
}

export default VendorDishes;
