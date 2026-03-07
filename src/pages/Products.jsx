import React, { useState } from 'react';

// Unified Product Hover Color & Text Contrast Map for All Categories
const productHoverColors = {
  // --- AGRICULTURAL PRODUCTS ---
  // Cereals & Grains
  "Wheat": { bg: "#DDA049", text: "#FFFFFF" },
  "Rice": { bg: "#F4F4F0", text: "#1F2937" },
  "Maize (Corn)": { bg: "#FFD700", text: "#1F2937" },
  "Barley": { bg: "#E3C598", text: "#1F2937" },
  // Pulses & Legumes
  "Chickpeas": { bg: "#D2B48C", text: "#1F2937" },
  "Lentils": { bg: "#CC7722", text: "#FFFFFF" },
  "Green Gram": { bg: "#8F9779", text: "#FFFFFF" },
  "Black Gram": { bg: "#4A4A4A", text: "#FFFFFF" },
  "Kidney Beans": { bg: "#7E2811", text: "#FFFFFF" },
  // Oil Seeds
  "Sesame Seeds": { bg: "#E3D8C8", text: "#1F2937" },
  "Mustard Seeds": { bg: "#FFDB58", text: "#1F2937" },
  "Soy beans": { bg: "#D4C8A1", text: "#1F2937" },
  "Sunflower Seeds": { bg: "#FFC512", text: "#1F2937" },
  "Cotton Seed": { bg: "#D1D1D1", text: "#1F2937" },
  // Spices
  "Turmeric": { bg: "#FFB300", text: "#FFFFFF" },
  "Cumin": { bg: "#947B5A", text: "#FFFFFF" },
  "Coriander": { bg: "#8A9A5B", text: "#FFFFFF" },
  "Chili": { bg: "#C21807", text: "#FFFFFF" },
  "Black Pepper": { bg: "#3A3A3A", text: "#FFFFFF" },
  "Ginger": { bg: "#E6C280", text: "#1F2937" },
  // Nuts & Dry Fruits
  "Peanuts": { bg: "#D9A05B", text: "#FFFFFF" },
  "Cashews": { bg: "#F2E3C6", text: "#1F2937" },
  "Almonds": { bg: "#A0522D", text: "#FFFFFF" },
  "Raisins (Dried Grapes)": { bg: "#4B0082", text: "#FFFFFF" },
  "Anjeer (Dried Figs)": { bg: "#808000", text: "#FFFFFF" },
  "Walnut": { bg: "#773F1A", text: "#FFFFFF" },
  // Fresh & Dehydrated Produce
  "Onions": { bg: "#D8BFD8", text: "#1F2937" },
  "Garlic": { bg: "#F0E6D2", text: "#1F2937" },
  "Potatoes": { bg: "#B79268", text: "#FFFFFF" },
  "Dehydrated Vegetables": { bg: "#556B2F", text: "#FFFFFF" },
  "Fresh Fruit & Vegetables": { bg: "#4CAF50", text: "#FFFFFF" },
  // Natural Sweeteners & Fiber Crops
  "Jaggery (Cane / Palm)": { bg: "#8B4513", text: "#FFFFFF" },
  "Cotton": { bg: "#F8F8FF", text: "#1F2937" },
  // Fresh Fruit
  "Mango": { bg: "#F8A100", text: "#FFFFFF" },
  "Banana": { bg: "#FFE135", text: "#1F2937" },
  "Apple": { bg: "#FF5252", text: "#FFFFFF" },
  "Orange": { bg: "#FF9F43", text: "#FFFFFF" },
  "Grapes": { bg: "#A32CC4", text: "#FFFFFF" },
  "Pomegranate": { bg: "#E91E63", text: "#FFFFFF" },
  "Guava": { bg: "#8BC34A", text: "#FFFFFF" },

  // --- HERBAL PRODUCTS ---
  "Ashwagandha Extract": { bg: "#C19A6B", text: "#FFFFFF" }, // Root brown
  "Green Tea Extract": { bg: "#4CAF50", text: "#FFFFFF" }, // Leaf green
  "Fenugreek Extract": { bg: "#CD853F", text: "#FFFFFF" }, // Golden brown
  "Tulsi Extract": { bg: "#2E8B57", text: "#FFFFFF" }, // Holy basil green
  "Neem Extract": { bg: "#006400", text: "#FFFFFF" }, // Deep green
  "Turmeric Extract": { bg: "#FFA500", text: "#1F2937" }, // Vibrant orange-yellow
  "Amla Extract": { bg: "#9ACD32", text: "#1F2937" }, // Light yellow-green
  "Ginger Extract": { bg: "#DEB887", text: "#1F2937" }, // Pale root yellow
  "Boswellia Extract": { bg: "#DAA520", text: "#1F2937" }, // Golden resin
  "Licorice Extract": { bg: "#8B4513", text: "#FFFFFF" }, // Wood brown
  "Shatavari Extract": { bg: "#F5DEB3", text: "#1F2937" }, // Pale root
  "Brahmi Extract": { bg: "#228B22", text: "#FFFFFF" }, // Forest green
  "Tribulus Extract": { bg: "#BDB76B", text: "#1F2937" }, // Khaki yellow
  "Bacopa Extract": { bg: "#556B2F", text: "#FFFFFF" }, // Dark olive green
  "Bitter Melon Extract": { bg: "#3CB371", text: "#FFFFFF" }, // Medium sea green
  "Cissus Extract": { bg: "#8FBC8F", text: "#1F2937" }, // Pale green
  "Coleus Extract": { bg: "#8B008B", text: "#FFFFFF" }, // Dark magenta (flower)
  "Garcinia Extract": { bg: "#FFD700", text: "#1F2937" }, // Fruit yellow
  "Guggul Extract": { bg: "#A0522D", text: "#FFFFFF" }, // Brown resin
  "Gymnema Extract": { bg: "#2E8B57", text: "#FFFFFF" }, // Leaf green
  "Noni Extract": { bg: "#FFFACD", text: "#1F2937" }, // Pale fruit yellow
  "Pomegranate Extract": { bg: "#DC143C", text: "#FFFFFF" }, // Crimson red
  "Sea Buckthorn Extract": { bg: "#FF8C00", text: "#1F2937" }, // Dark orange
  "Stevia Extract": { bg: "#98FB98", text: "#1F2937" }, // Pale green
  "Valerian Extract": { bg: "#D2B48C", text: "#1F2937" }, // Light brown
  "Wheatgrass Extract": { bg: "#7CFC00", text: "#1F2937" }, // Bright grass green
  "Aloe Vera Extract": { bg: "#00FF7F", text: "#1F2937" }, // Spring green
  "Bael Extract": { bg: "#DAA520", text: "#1F2937" }, // Golden yellow
  "Arjuna Extract": { bg: "#8B4513", text: "#FFFFFF" }, // Bark brown
  "Black Pepper Extract": { bg: "#1C1C1C", text: "#FFFFFF" }, // Black
  "Bhringraj Extract": { bg: "#2F4F4F", text: "#FFFFFF" }, // Dark slate green
  "Curry Leaf Extract": { bg: "#006400", text: "#FFFFFF" }, // Dark green
  "Fennel Extract": { bg: "#F5DEB3", text: "#1F2937" }, // Pale green/yellow
  "Hibiscus Extract": { bg: "#DC143C", text: "#FFFFFF" }, // Deep red
  "Cumin Extract": { bg: "#CD853F", text: "#FFFFFF" }, // Brownish
  "Holy Basil Extract": { bg: "#2E8B57", text: "#FFFFFF" }, // Green
  "Onion Extract": { bg: "#DDA0DD", text: "#1F2937" }, // Plum/pink
  "Rosemary Extract": { bg: "#556B2F", text: "#FFFFFF" }, // Olive green
  "Sage Extract": { bg: "#8FBC8F", text: "#1F2937" }, // Grey-green
  "Senna Extract": { bg: "#BDB76B", text: "#1F2937" }, // Yellowish green
  "Spirulina Extract": { bg: "#008080", text: "#FFFFFF" }, // Teal/blue-green
  "Triphala Extract": { bg: "#8B4513", text: "#FFFFFF" }, // Earthy brown
  "Green Coffee Bean Extract": { bg: "#8FBC8F", text: "#1F2937" }, // Pale green
  "Moringa Extract": { bg: "#32CD32", text: "#1F2937" }, // Lime green
  "Cinnamon Extract": { bg: "#D2691E", text: "#FFFFFF" }, // Cinnamon brown
  "Clove Extract": { bg: "#654321", text: "#FFFFFF" }, // Dark brown
  "Cardamom Extract": { bg: "#9ACD32", text: "#1F2937" }, // Light green
  "Peppermint Extract": { bg: "#00FA9A", text: "#1F2937" }, // Mint green
  "Spearmint Extract": { bg: "#3CB371", text: "#FFFFFF" }, // Sea green
  "Chamomile Extract": { bg: "#FFD700", text: "#1F2937" }, // Yellow flower
  "Calendula Extract": { bg: "#FFA500", text: "#1F2937" }, // Orange flower
  "Lavender Extract": { bg: "#E6E6FA", text: "#1F2937" }, // Lavender
  "Lemon Balm Extract": { bg: "#98FB98", text: "#1F2937" }, // Light green
  "Gotu Kola Extract": { bg: "#2E8B57", text: "#FFFFFF" }, // Green
  "Elderberry Extract": { bg: "#4B0082", text: "#FFFFFF" }, // Indigo/purple
  "Grape Seed Extract": { bg: "#800080", text: "#FFFFFF" }, // Purple/red
  "Black Cohosh Extract": { bg: "#A9A9A9", text: "#1F2937" }, // Grey/black root
  "Kudzu Extract": { bg: "#DDA0DD", text: "#1F2937" }, // Purple flower/pale root

  // --- ORGANIC FERTILIZERS ---
  "Cow dung manure (FYM – Farmyard Manure)": { bg: "#5C4033", text: "#FFFFFF" }, // Dark earthy brown
  "Poultry manure": { bg: "#8B7355", text: "#FFFFFF" }, // Grey-brown
  "Bone meal": { bg: "#F5F5DC", text: "#1F2937" }, // Off-white/beige
  "Fish meal": { bg: "#8B4513", text: "#FFFFFF" }, // Brown
  "Vermicompost": { bg: "#3E2723", text: "#FFFFFF" }, // Very dark rich brown/black
  "Compost": { bg: "#4E342E", text: "#FFFFFF" }, // Loamy brown
  "Green manure (sunhemp, dhaincha)": { bg: "#4CAF50", text: "#FFFFFF" }, // Vivid crop green
  "Neem cake": { bg: "#556B2F", text: "#FFFFFF" }, // Dark greenish-brown
  "Castor cake": { bg: "#A0522D", text: "#FFFFFF" }, // Sienna brown
  "Seaweed extract": { bg: "#2F4F4F", text: "#FFFFFF" }, // Dark slate/ocean green
  "Rock phosphate": { bg: "#A9A9A9", text: "#1F2937" }, // Greyish mineral
  "Gypsum": { bg: "#F8F8FF", text: "#1F2937" }, // Ghost white
  "Lime": { bg: "#F5FFFA", text: "#1F2937" } // Mint cream / chalk white
};

// Extracted from the Scentorgo PDF
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
  { name: "Cotton", category: "Fiber Crops" },
  { name: "Mango", category: "Fresh Fruit" },
  { name: "Banana", category: "Fresh Fruit" },
  { name: "Apple", category: "Fresh Fruit" },
  { name: "Orange", category: "Fresh Fruit" },
  { name: "Grapes", category: "Fresh Fruit" },
  { name: "Pomegranate", category: "Fresh Fruit" },
  { name: "Guava", category: "Fresh Fruit" }
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

// Organic Fertilizers Data
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

const Products = () => {
  // Main category toggle
  const [activeCategory, setActiveCategory] = useState(null);
  // Subcategory toggle for Agricultural Products
  const [activeAgriCategory, setActiveAgriCategory] = useState(null);
  // Subcategory toggle for Organic Fertilizers
  const [activeOrganicCategory, setActiveOrganicCategory] = useState(null);
  // Track currently hovered product
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    "Agricultural Products",
    "Herbal Products",
    "Organic Fertilizers"
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
              onClick={() => {
                setActiveCategory(activeCategory === category ? null : category);
                // Reset subcategory toggles when changing main categories
                setActiveAgriCategory(null);
                setActiveOrganicCategory(null);
              }}
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
            {/* Herbal Products - Standard Grid with Dynamic Hover */}
            {activeCategory === "Herbal Products" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {herbalProducts.map((product, index) => {
                  const isHovered = hoveredProduct === product.name;
                  const customColors = productHoverColors[product.name];

                  return (
                    <div 
                      key={index} 
                      onMouseEnter={() => setHoveredProduct(product.name)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      style={{ 
                        backgroundColor: isHovered && customColors ? customColors.bg : 'white' 
                      }}
                      className={`rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-40 ${
                        isHovered && customColors ? '' : 'hover:bg-green-50'
                      }`}
                    >
                      <h3 
                        className="text-xl font-bold mb-3 transition-colors duration-300"
                        style={{
                          color: isHovered && customColors ? customColors.text : '#111827'
                        }}
                      >
                        {product.name}
                      </h3>
                      <p 
                        className="text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300"
                        style={{
                          // Smart background logic: Semi-transparent overlay based on text color needs
                          backgroundColor: isHovered && customColors 
                            ? (customColors.text === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)') 
                            : '#F0FDF4', // bg-green-50
                          color: isHovered && customColors ? customColors.text : '#15803D' // text-green-700
                        }}
                      >
                        {product.scientific}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Agricultural Products - Accordion Toggle Grouped by Category */}
            {activeCategory === "Agricultural Products" && (
              <div className="space-y-4">
                {Object.entries(groupedAgriProducts).map(([categoryName, products]) => (
                  <div key={categoryName} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    
                    {/* Toggle Button for Subcategory */}
                    <button
                      onClick={() => setActiveAgriCategory(activeAgriCategory === categoryName ? null : categoryName)}
                      className="w-full px-8 py-5 flex justify-between items-center text-left hover:bg-green-50 transition-colors duration-300 focus:outline-none"
                    >
                      <h3 className="text-xl font-bold text-green-700">{categoryName}</h3>
                      <span className="text-green-700 text-2xl font-medium leading-none">
                        {activeAgriCategory === categoryName ? "−" : "+"}
                      </span>
                    </button>
                    
                    {/* Subcategory Grid */}
                    {activeAgriCategory === categoryName && (
                      <div className="px-8 pb-8 pt-2 border-t border-gray-100 bg-gray-50/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                          {products.map((product, index) => {
                            const isHovered = hoveredProduct === product.name;
                            const customColors = productHoverColors[product.name];
                            
                            return (
                              <div 
                                key={index} 
                                onMouseEnter={() => setHoveredProduct(product.name)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                style={{ 
                                  backgroundColor: isHovered && customColors ? customColors.bg : 'white' 
                                }}
                                className={`rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-24 ${
                                  isHovered && customColors ? '' : 'hover:bg-green-50'
                                }`}
                              >
                                <h4 
                                  className="text-lg font-bold transition-colors duration-300"
                                  style={{
                                    color: isHovered && customColors ? customColors.text : '#111827'
                                  }}
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
            )}

            {/* Organic Fertilizers - Accordion Toggle Grouped by Category */}
            {activeCategory === "Organic Fertilizers" && (
              <div className="space-y-6">
                
                {/* Descriptive Text & Benefits for Organic Fertilizers */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {organicFertilizersInfo.description}
                  </p>
                  
                  {/* Benefits Section */}
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

                {/* Subcategories Accordion with Dynamic Hover */}
                <div className="space-y-4">
                  {organicFertilizersInfo.categories.map((cat, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                      
                      {/* Toggle Button for Subcategory */}
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
                      
                      {/* Subcategory Grid */}
                      {activeOrganicCategory === cat.name && (
                        <div className="px-8 pb-8 pt-2 border-t border-gray-100 bg-gray-50/50">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {cat.items.map((item, idx) => {
                              const isHovered = hoveredProduct === item;
                              const customColors = productHoverColors[item];

                              return (
                                <div 
                                  key={idx} 
                                  onMouseEnter={() => setHoveredProduct(item)}
                                  onMouseLeave={() => setHoveredProduct(null)}
                                  style={{ 
                                    backgroundColor: isHovered && customColors ? customColors.bg : 'white' 
                                  }}
                                  className={`rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-24 ${
                                    isHovered && customColors ? '' : 'hover:bg-green-50'
                                  }`}
                                >
                                  <h4 
                                    className="text-lg font-bold transition-colors duration-300"
                                    style={{
                                      color: isHovered && customColors ? customColors.text : '#111827'
                                    }}
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
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default Products;