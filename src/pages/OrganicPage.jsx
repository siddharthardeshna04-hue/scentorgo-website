import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const organicHoverColors = {
  "Cow dung manure (FYM – Farmyard Manure)": { bg: "#5C4033", text: "#FFFFFF" },
  "Poultry manure": { bg: "#8B7355", text: "#FFFFFF" },
  "Bone meal": { bg: "#F5F5DC", text: "#1F2937" },
  "Fish meal": { bg: "#8B4513", text: "#FFFFFF" },
  "Vermicompost": { bg: "#3E2723", text: "#FFFFFF" },
  "Compost": { bg: "#4E342E", text: "#FFFFFF" },
  "Green manure (sunhemp, dhaincha)": { bg: "#4CAF50", text: "#FFFFFF" },
  "Neem cake": { bg: "#556B2F", text: "#FFFFFF" },
  "Castor cake": { bg: "#A0522D", text: "#FFFFFF" },
  "Seaweed extract": { bg: "#2F4F4F", text: "#FFFFFF" },
  "Rock phosphate": { bg: "#A9A9A9", text: "#1F2937" },
  "Gypsum": { bg: "#F8F8FF", text: "#1F2937" },
  "Lime": { bg: "#F5FFFA", text: "#1F2937" }
};

const organicFertilizersInfo = {
  description: "Organic fertilizers are natural fertilizers made from plant, animal, or mineral sources that improve soil fertility and plant growth without using synthetic chemicals 🌱. Organic fertilizers contain natural nutrients like nitrogen (N), phosphorus (P), and potassium (K) and also improve soil structure, microbial activity, and water retention.",
  benefits: [
    "Improve soil health",
    "Increase beneficial microorganisms",
    "Enhance soil water retention",
    "Reduce chemical pollution",
    "Produce healthier crops"
  ],
  categories: [
    {
      name: "Animal-Based Fertilizers",
      subtitle: "These are rich in nitrogen and organic matter.",
      items: [
        "Cow dung manure (FYM – Farmyard Manure)",
        "Poultry manure",
        "Bone meal",
        "Fish meal",
        "Vermicompost"
      ]
    },
    {
      name: "Plant-Based Fertilizers",
      subtitle: "They help improve soil nutrients and microbial life.",
      items: [
        "Compost",
        "Green manure (sunhemp, dhaincha)",
        "Neem cake",
        "Castor cake",
        "Seaweed extract"
      ]
    },
    {
      name: "Mineral Organic Fertilizers",
      subtitle: "Used mainly to correct soil nutrient deficiencies.",
      items: [
        "Rock phosphate",
        "Gypsum",
        "Lime"
      ]
    }
  ]
};

const OrganicPage = () => {
  const [activeOrganicCategory, setActiveOrganicCategory] = useState(null);
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
          <h1 className="text-4xl font-bold text-gray-900">Organic Fertilizers</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded mb-6"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {organicFertilizersInfo.description}
            </p>
            
            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                Benefits of Organic Fertilizers 🌾
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {organicFertilizersInfo.benefits.map((benefit, idx) => (
                  <span 
                    key={idx} 
                    className="bg-green-50 text-green-800 text-sm font-semibold px-4 py-2 rounded-full border border-green-200 shadow-sm"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {organicFertilizersInfo.categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                
                <button
                  onClick={() => setActiveOrganicCategory(activeOrganicCategory === cat.name ? null : cat.name)}
                  className="w-full px-8 py-5 flex justify-between items-center text-left hover:bg-green-50 transition-colors duration-300 focus:outline-none"
                >
                  <div>
                    <h3 className="text-xl font-bold text-green-700">{cat.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 font-medium italic">{cat.subtitle}</p>
                  </div>
                  <span className="text-green-700 text-2xl font-medium leading-none ml-4">
                    {activeOrganicCategory === cat.name ? "−" : "+"}
                  </span>
                </button>
                
                {activeOrganicCategory === cat.name && (
                  <div className="px-8 pb-8 pt-2 border-t border-gray-100 bg-gray-50/50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                      {cat.items.map((item, idx) => {
                        const isHovered = hoveredProduct === item;
                        const customColors = organicHoverColors[item];

                        return (
                          <div 
                            key={idx} 
                            onMouseEnter={() => setHoveredProduct(item)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            style={{ 
                              backgroundColor: isHovered && customColors ? customColors.bg : 'white' 
                            }}
                            className={`cursor-pointer rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-24 ${
                              isHovered && customColors ? '' : 'hover:bg-green-50'
                            }`}
                          >
                            <h4 
                              className="text-lg font-bold transition-colors duration-300"
                              style={{ color: isHovered && customColors ? customColors.text : '#111827' }}
                            >
                              {item}
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
    </div>
  );
};

export default OrganicPage;