import React, { useEffect, useState } from 'react';
import DishCard from '../DishCard/DishCard'; 
import { FaFire } from 'react-icons/fa6';

function VendorDishes({ id }) {
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
      ) : dishes.length > 0 ? (
        <div className="grid grid-cols-1 gap-2">
          {dishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No dishes available for this vendor, check back later!
        </p>
      )}
    </div>
  );
}

export default VendorDishes;
