import React, { useState } from 'react';

// Extracted from the Scentorgo PDF (Icons removed per client request)
const herbalProducts = [
  { name: "Ashwagandha Extract", scientific: "Withania Somnifera" },
  { name: "Green Tea Extract", scientific: "Camellia Sinensis" },
  { name: "Fenugreek Extract", scientific: "Trigonella Foenum-Graecum" },
  { name: "Tulsi Extract", scientific: "Ocimum Sanctum" },
  { name: "Neem Extract", scientific: "Azadirachta Indica" },
  { name: "Turmeric Extract", scientific: "Curcuma Longa" },
  { name: "Amla Extract", scientific: "Phyllanthus Emblica" },
  { name: "Ginger Extract", scientific: "Zingiber Officinale" },
  { name: "Boswellia Extract", scientific: "Ocimum Sannctum" },
  { name: "Licorice Extract", scientific: "Azadirachta Indica" },
  { name: "Shatavari Extract", scientific: "Asparagus Racemosus" },
  { name: "Brahmi Extract", scientific: "Bacopa Monmeri" },
  { name: "Tribulus Extract", scientific: "Tribulus Terrestris" },
  { name: "Bacopa Extract", scientific: "Bacopa monnieri" },
  { name: "Bitter Melon Extract", scientific: "Momordica charantia" },
  { name: "Cissus Extract", scientific: "Cissus quadrangularis" },
  { name: "Coleus Extract", scientific: "Coleus forskohlii" },
  { name: "Garcinia Extract", scientific: "Garcinia cambogia" },
  { name: "Guggul Extract", scientific: "Commiphora mukul" },
  { name: "Gymnema Extract", scientific: "Gymnema sylvestre" },
  { name: "Noni Extract", scientific: "Morinda citrifolia" },
  { name: "Pomegranate Extract", scientific: "Punica granatum" },
  { name: "Sea Buckthorn Extract", scientific: "Hippophae rhamnoides" },
  { name: "Stevia Extract", scientific: "Stevia rebaudiana" },
  { name: "Valerian Extract", scientific: "Valeriana officinalis" },
  { name: "Wheatgrass Extract", scientific: "Triticum aestivum" },
  { name: "Aloe Vera Extract", scientific: "Bacopa monnieri" },
  { name: "Bael Extract", scientific: "Aegle marmelos" },
  { name: "Arjuna Extract", scientific: "Terminalia arjuna" },
  { name: "Black Pepper Extract", scientific: "Piper nigrum" },
  { name: "Bhringraj Extract", scientific: "Eclipta alba" },
  { name: "Curry Leaf Extract", scientific: "Murraya koenigii" },
  { name: "Fennel Extract", scientific: "Foeniculum vulgare" },
  { name: "Hibiscus Extract", scientific: "Hibiscus rosa-sinensis" },
  { name: "Cumin Extract", scientific: "Cuminum cyminum" },
  { name: "Holy Basil Extract", scientific: "Brassica nigra" },
  { name: "Onion Extract", scientific: "Allium cepa" },
  { name: "Rosemary Extract", scientific: "Rosmarinus officinalis" },
  { name: "Sage Extract", scientific: "Salvia officinalis" },
  { name: "Senna Extract", scientific: "Cassia angustifolia" },
  { name: "Spirulina Extract", scientific: "Arthrospira platensis" },
  { name: "Triphala Extract", scientific: "Emblica officinalis" },
  { name: "Green Coffee Bean Extract", scientific: "Coffea arabica" },
  { name: "Moringa Extract", scientific: "Moringa oleifera" },
  { name: "Cinnamon Extract", scientific: "Cinnamomum verum" },
  { name: "Clove Extract", scientific: "Syzygium aromaticum" },
  { name: "Cardamom Extract", scientific: "Elettaria cardamomum" },
  { name: "Peppermint Extract", scientific: "Mentha piperita" },
  { name: "Spearmint Extract", scientific: "Mentha spicata" },
  { name: "Chamomile Extract", scientific: "Matricaria chamomilla" },
  { name: "Calendula Extract", scientific: "Calendula officinalis" },
  { name: "Lavender Extract", scientific: "Lavandula angustifolia" },
  { name: "Lemon Balm Extract", scientific: "Melissa officinalis" },
  { name: "Gotu Kola Extract", scientific: "Centella asiatica" },
  { name: "Elderberry Extract", scientific: "Sambucus nigra" },
  { name: "Grape Seed Extract", scientific: "Vitis vinifera" },
  { name: "Black Cohosh Extract", scientific: "Actaea racemosa" },
  { name: "Kudzu Extract", scientific: "Pueraria lobata" }
];

// New Agricultural Products Data
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
  { name: "Cotton", category: "Fiber Crops" }
];

// Helper to group the agricultural products by their category
const groupedAgriProducts = agriculturalProducts.reduce((groups, product) => {
  const category = product.category;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(product);
  return groups;
}, {});

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Herbal Products");

  const categories = [
    "Agricultural Products",
    "Herbal Products",
    "Organic Products"
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

        {/* Category Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? "bg-green-600 text-white shadow-md scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Display Area */}
        {activeCategory && (
          <div>
            {/* Herbal Products - Standard Grid */}
            {activeCategory === "Herbal Products" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {herbalProducts.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-40"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-xs text-green-700 font-medium bg-green-50 inline-block px-3 py-1 rounded-full">
                      {product.scientific}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Agricultural Products - Grouped by Category */}
            {activeCategory === "Agricultural Products" && (
              <div className="space-y-16">
                {Object.entries(groupedAgriProducts).map(([categoryName, products]) => (
                  <div key={categoryName}>
                    {/* Group Header */}
                    <div className="mb-6 border-b border-gray-200 pb-2">
                      <h3 className="text-2xl font-bold text-green-700">{categoryName}</h3>
                    </div>
                    
                    {/* Group Grid - Height and padding reduced */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {products.map((product, index) => (
                        <div 
                          key={index} 
                          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-24"
                        >
                          <h4 className="text-xl font-bold text-gray-900">{product.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Organic Products - Coming Soon */}
            {activeCategory === "Organic Products" && (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-600">
                  We are currently updating our catalog for {activeCategory}. Please check back later!
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;