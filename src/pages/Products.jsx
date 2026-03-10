import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  // We map out the 3 cards and tell them exactly which new URL route to navigate to
  const productCategories = [
    { name: "Agricultural Products", img: "/agriprdt.jpeg", path: "/agricultural-products" },
    { name: "Herbal Products", img: "/herbals.jpeg", path: "/herbal-products" },
    { name: "Organic Fertilizers", img: "/organics.jpeg", path: "/organic-fertilizers" }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our Premium range of export-grade agricultural products, premium herbal extracts, and sustainable organic fertilizers to global markets.
          </p>
        </div>

       {/* Category Selection Image Cards as Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {productCategories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="cursor-pointer relative h-48 w-full rounded-2xl overflow-hidden group shadow-md transition-all duration-300 opacity-90 hover:opacity-100 hover:shadow-lg hover:-translate-y-1 block"
            >
              {/* Background Image */}
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40"></div>
              
              {/* Category Title */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4 tracking-wide drop-shadow-md">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;