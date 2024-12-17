import React, { useEffect, useState } from 'react';
import DishCard from '../DishCard/DishCard'; 
import { FaFire } from 'react-icons/fa6';

function VendorDishes({ id, searchQuery }) {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await fetch(`http://localhost:8080/dishes/vendors/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dishes');
        }
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDishes();
  }, [id]);

  const filteredDishes = searchQuery
    ? dishes.filter(dish => dish.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : dishes;

  return (
    <div>
      <h2 className="text-xl font-semibold mt-5 mb-2 flex items-center">
        <FaFire className="mr-2" style={{ color: '#D70F64' }} />
        Closing Deals
      </h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 gap-2">
          {filteredDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="col-span-full text-center mt-10">
          <img 
            src="/assets/images/paupau-wink.png" 
            alt="No dishes found" 
            className="mx-auto w-40 h-40 object-contain"
          />
          <p className="text-gray-500 mt-4 text-base">No dishes found, try again</p>
        </div>
      )}
    </div>
  );
}

export default VendorDishes;
