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
        <div className="grid grid-cols-3 gap-8">
          {products && products.length > 0 ? (
            products.map((product, id) => (
              <div key={id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={product.thumbnail} alt={product.title} className="w-full h-56 object-cover object-center" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 h-12">{product.title}</h3>
                  <p className="text-gray-600 mb-6 h-10">{truncateDescription(product.description, 100)}</p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center h-16">
                      <p className="text-gray-700 font-semibold mr-1">Rating:</p>
                      <p className="text-yellow-500 mr-1">{product.rating}</p>
                      <MdOutlineStar color="#FFA500" size="20" />
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <MdDiscount className="text-red-500 mr-1" />
                        <p className="text-red-500 font-semibold">{product.discountPercentage}% OFF</p>
                      </div>
                      <p className="text-gray-700 ml-4">In-stock: <span className="font-semibold">{product.stock}</span></p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-800 font-semibold mb-2">Price: ${product.price}</p>
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400 transition active:scale-95">Buy Now</button>
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
