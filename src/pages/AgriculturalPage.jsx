import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const agriHoverColors = {
  "Wheat": { bg: "#DDA049", text: "#FFFFFF" },
  "Rice": { bg: "#F4F4F0", text: "#1F2937" },
  "Maize (Corn)": { bg: "#FFD700", text: "#1F2937" },
  "Barley": { bg: "#E3C598", text: "#1F2937" },
  "Chickpeas": { bg: "#D2B48C", text: "#1F2937" },
  "Lentils": { bg: "#CC7722", text: "#FFFFFF" },
  "Green Gram": { bg: "#8F9779", text: "#FFFFFF" },
  "Black Gram": { bg: "#4A4A4A", text: "#FFFFFF" },
  "Kidney Beans": { bg: "#7E2811", text: "#FFFFFF" },
  "Sesame Seeds": { bg: "#E3D8C8", text: "#1F2937" },
  "Mustard Seeds": { bg: "#FFDB58", text: "#1F2937" },
  "Soy beans": { bg: "#D4C8A1", text: "#1F2937" },
  "Sunflower Seeds": { bg: "#FFC512", text: "#1F2937" },
  "Cotton Seed": { bg: "#D1D1D1", text: "#1F2937" },
  "Turmeric": { bg: "#FFB300", text: "#FFFFFF" },
  "Cumin": { bg: "#947B5A", text: "#FFFFFF" },
  "Coriander": { bg: "#8A9A5B", text: "#FFFFFF" },
  "Chili": { bg: "#C21807", text: "#FFFFFF" },
  "Black Pepper": { bg: "#3A3A3A", text: "#FFFFFF" },
  "Ginger": { bg: "#E6C280", text: "#1F2937" },
  "Peanuts": { bg: "#D9A05B", text: "#FFFFFF" },
  "Cashews": { bg: "#F2E3C6", text: "#1F2937" },
  "Almonds": { bg: "#A0522D", text: "#FFFFFF" },
  "Raisins (Dried Grapes)": { bg: "#4B0082", text: "#FFFFFF" },
  "Anjeer (Dried Figs)": { bg: "#808000", text: "#FFFFFF" },
  "Walnut": { bg: "#773F1A", text: "#FFFFFF" },
  "Onions": { bg: "#D8BFD8", text: "#1F2937" },
  "Garlic": { bg: "#F0E6D2", text: "#1F2937" },
  "Potatoes": { bg: "#B79268", text: "#FFFFFF" },
  "Dehydrated Vegetables": { bg: "#556B2F", text: "#FFFFFF" },
  "Fresh Fruit & Vegetables": { bg: "#4CAF50", text: "#FFFFFF" },
  "Jaggery (Cane / Palm)": { bg: "#8B4513", text: "#FFFFFF" },
  "Cotton": { bg: "#F8F8FF", text: "#1F2937" },
  "Mango": { bg: "#F8A100", text: "#FFFFFF" },
  "Banana": { bg: "#FFE135", text: "#1F2937" },
  "Apple": { bg: "#FF5252", text: "#FFFFFF" },
  "Orange": { bg: "#FF9F43", text: "#FFFFFF" },
  "Grapes": { bg: "#A32CC4", text: "#FFFFFF" },
  "Pomegranate": { bg: "#E91E63", text: "#FFFFFF" },
  "Guava": { bg: "#8BC34A", text: "#FFFFFF" }
};

const agriculturalProducts = [
  { name: "Wheat", category: "Cereals & Grains" },
  { name: "Rice", category: "Cereals & Grains" },
  { name: "Maize (Corn)", category: "Cereals & Grains" },
  { name: "Barley", category: "Cereals & Grains" },
  { name: "Chickpeas", category: "Pulses & Legumes" },
  { name: "Lentils", category: "Pulses & Legumes" },
  { name: "Green Gram", category: "Pulses & Legumes" },
  { name: "Black Gram", category: "Pulses & Legumes" },
  { name: "Kidney Beans", category: "Pulses & Legumes" },
  { name: "Sesame Seeds", category: "Oil Seeds" },
  { name: "Mustard Seeds", category: "Oil Seeds" },
  { name: "Soy beans", category: "Oil Seeds" },
  { name: "Sunflower Seeds", category: "Oil Seeds" },
  { name: "Cotton Seed", category: "Oil Seeds" },
  { name: "Turmeric", category: "Spices" },
  { name: "Cumin", category: "Spices" },
  { name: "Coriander", category: "Spices" },
  { name: "Chili", category: "Spices" },
  { name: "Black Pepper", category: "Spices" },
  { name: "Ginger", category: "Spices" },
  { name: "Peanuts", category: "Nuts & Dry Fruits" },
  { name: "Cashews", category: "Nuts & Dry Fruits" },
  { name: "Almonds", category: "Nuts & Dry Fruits" },
  { name: "Raisins (Dried Grapes)", category: "Nuts & Dry Fruits" },
  { name: "Anjeer (Dried Figs)", category: "Nuts & Dry Fruits" },
  { name: "Walnut", category: "Nuts & Dry Fruits" },
  { name: "Onions", category: "Fresh & Dehydrated Produce" },
  { name: "Garlic", category: "Fresh & Dehydrated Produce" },
  { name: "Potatoes", category: "Fresh & Dehydrated Produce" },
  { name: "Dehydrated Vegetables", category: "Fresh & Dehydrated Produce" },
  { name: "Fresh Fruit & Vegetables", category: "Fresh & Dehydrated Produce" },
  { name: "Jaggery (Cane / Palm)", category: "Natural Sweeteners" },
  { name: "Cotton", category: "Fiber Crops" },
  { name: "Mango", category: "Fresh Fruit" },
  { name: "Banana", category: "Fresh Fruit" },
  { name: "Apple", category: "Fresh Fruit" },
  { name: "Orange", category: "Fresh Fruit" },
  { name: "Grapes", category: "Fresh Fruit" },
  { name: "Pomegranate", category: "Fresh Fruit" },
  { name: "Guava", category: "Fresh Fruit" }
];

const groupedAgriProducts = agriculturalProducts.reduce((groups, product) => {
  const category = product.category;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(product);
  return groups;
}, {});

const AgriculturalPage = () => {
  const [activeAgriCategory, setActiveAgriCategory] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-8">
          <Link to="/" className="text-green-600 hover:text-green-800 font-semibold flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Agricultural Products</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our range of export-grade agricultural products.
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(groupedAgriProducts).map(([categoryName, products]) => (
            <div key={categoryName} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              
              <button
                onClick={() => setActiveAgriCategory(activeAgriCategory === categoryName ? null : categoryName)}
                className="w-full px-8 py-5 flex justify-between items-center text-left hover:bg-green-50 transition-colors duration-300 focus:outline-none"
              >
                <h3 className="text-xl font-bold text-green-700">{categoryName}</h3>
                <span className="text-green-700 text-2xl font-medium leading-none">
                  {activeAgriCategory === categoryName ? "−" : "+"}
                </span>
              </button>
              
              {activeAgriCategory === categoryName && (
                <div className="px-8 pb-8 pt-2 border-t border-gray-100 bg-gray-50/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {products.map((product, index) => {
                      const isHovered = hoveredProduct === product.name;
                      const customColors = agriHoverColors[product.name];
                      
                      return (
                        <div 
                          key={index} 
                          onMouseEnter={() => setHoveredProduct(product.name)}
                          onMouseLeave={() => setHoveredProduct(null)}
                          style={{ 
                            backgroundColor: isHovered && customColors ? customColors.bg : 'white' 
                          }}
                          className={`cursor-pointer rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-24 ${
                            isHovered && customColors ? '' : 'hover:bg-green-50'
                          }`}
                        >
                          <h4 
                            className="text-lg font-bold transition-colors duration-300"
                            style={{ color: isHovered && customColors ? customColors.text : '#111827' }}
                          >
                            {product.name}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AgriculturalPage;