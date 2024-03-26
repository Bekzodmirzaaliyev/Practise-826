import React, { useEffect, useState } from 'react';
import { MdOutlineStar } from "react-icons/md";
import { MdDiscount } from "react-icons/md";

const truncateDescription = (description, maxLength) => (
  description.length > maxLength ? `${description.substring(0, maxLength - 3)}...` : description
);

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => { setProducts(data.products) })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className='container h-screen mx-auto py-[30px]'>
        <div className="grid grid-cols-3 gap-5">
          {products && products.length > 0 ? (
            products.map((product, id) => (
              <div key={id} className="product-card bg-gray-100 border border-gray-200 rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
                <img src={product.thumbnail} alt="" className='w-full h-[300px] rounded-lg mb-4 hover:opacity-75 cursor-pointer' />
                <p className='font-bold text-xl mb-2 h-12'>{product.title}</p>
                <p className='text-gray-600 text-sm mb-4 h-16'>{truncateDescription(product.description, 72)}</p>
                <div className='flex items-center mb-4'>
                  <p className='text-gray-800 font-bold mr-2 h-6'>Rating:</p>
                  <p className='text-yellow-500 mr-2 h-6'>{product.rating}</p>
                  <MdOutlineStar color="#FFA500" size="20" />
                </div>
                <div className='flex justify-between items-center mb-4'>
                  <div className='flex items-center h-10'>
                    <MdDiscount className='text-red-500 mr-2' />
                    <p className='text-red-500 font-bold'>{product.discountPercentage}% OFF</p>
                  </div>
                  <p className='text-gray-800 h-10'>In-stock: <span className='font-bold'>{product.stock}</span></p>
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-lg text-gray-800 font-bold mb-4'>Price: ${product.price}</p>
                    <button className='cursor-pointer bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition active:scale-95'>Buy Now</button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
