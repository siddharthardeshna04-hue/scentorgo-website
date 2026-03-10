import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const herbalHoverColors = {
  "Ashwagandha Extract": { bg: "#C19A6B", text: "#FFFFFF" },
  "Green Tea Extract": { bg: "#4CAF50", text: "#FFFFFF" },
  "Fenugreek Extract": { bg: "#CD853F", text: "#FFFFFF" },
  "Tulsi Extract": { bg: "#2E8B57", text: "#FFFFFF" },
  "Neem Extract": { bg: "#006400", text: "#FFFFFF" },
  "Turmeric Extract": { bg: "#FFA500", text: "#1F2937" },
  "Amla Extract": { bg: "#9ACD32", text: "#1F2937" },
  "Ginger Extract": { bg: "#DEB887", text: "#1F2937" },
  "Boswellia Extract": { bg: "#DAA520", text: "#1F2937" },
  "Licorice Extract": { bg: "#8B4513", text: "#FFFFFF" },
  "Shatavari Extract": { bg: "#F5DEB3", text: "#1F2937" },
  "Brahmi Extract": { bg: "#228B22", text: "#FFFFFF" },
  "Tribulus Extract": { bg: "#BDB76B", text: "#1F2937" },
  "Bacopa Extract": { bg: "#556B2F", text: "#FFFFFF" },
  "Bitter Melon Extract": { bg: "#3CB371", text: "#FFFFFF" },
  "Cissus Extract": { bg: "#8FBC8F", text: "#1F2937" },
  "Coleus Extract": { bg: "#8B008B", text: "#FFFFFF" },
  "Garcinia Extract": { bg: "#FFD700", text: "#1F2937" },
  "Guggul Extract": { bg: "#A0522D", text: "#FFFFFF" },
  "Gymnema Extract": { bg: "#2E8B57", text: "#FFFFFF" },
  "Noni Extract": { bg: "#FFFACD", text: "#1F2937" },
  "Pomegranate Extract": { bg: "#DC143C", text: "#FFFFFF" },
  "Sea Buckthorn Extract": { bg: "#FF8C00", text: "#1F2937" },
  "Stevia Extract": { bg: "#98FB98", text: "#1F2937" },
  "Valerian Extract": { bg: "#D2B48C", text: "#1F2937" },
  "Wheatgrass Extract": { bg: "#7CFC00", text: "#1F2937" },
  "Aloe Vera Extract": { bg: "#00FF7F", text: "#1F2937" },
  "Bael Extract": { bg: "#DAA520", text: "#1F2937" },
  "Arjuna Extract": { bg: "#8B4513", text: "#FFFFFF" },
  "Black Pepper Extract": { bg: "#1C1C1C", text: "#FFFFFF" },
  "Bhringraj Extract": { bg: "#2F4F4F", text: "#FFFFFF" },
  "Curry Leaf Extract": { bg: "#006400", text: "#FFFFFF" },
  "Fennel Extract": { bg: "#F5DEB3", text: "#1F2937" },
  "Hibiscus Extract": { bg: "#DC143C", text: "#FFFFFF" },
  "Cumin Extract": { bg: "#CD853F", text: "#FFFFFF" },
  "Holy Basil Extract": { bg: "#2E8B57", text: "#FFFFFF" },
  "Onion Extract": { bg: "#DDA0DD", text: "#1F2937" },
  "Rosemary Extract": { bg: "#556B2F", text: "#FFFFFF" },
  "Sage Extract": { bg: "#8FBC8F", text: "#1F2937" },
  "Senna Extract": { bg: "#BDB76B", text: "#1F2937" },
  "Spirulina Extract": { bg: "#008080", text: "#FFFFFF" },
  "Triphala Extract": { bg: "#8B4513", text: "#FFFFFF" },
  "Green Coffee Bean Extract": { bg: "#8FBC8F", text: "#1F2937" },
  "Moringa Extract": { bg: "#32CD32", text: "#1F2937" },
  "Cinnamon Extract": { bg: "#D2691E", text: "#FFFFFF" },
  "Clove Extract": { bg: "#654321", text: "#FFFFFF" },
  "Cardamom Extract": { bg: "#9ACD32", text: "#1F2937" },
  "Peppermint Extract": { bg: "#00FA9A", text: "#1F2937" },
  "Spearmint Extract": { bg: "#3CB371", text: "#FFFFFF" },
  "Chamomile Extract": { bg: "#FFD700", text: "#1F2937" },
  "Calendula Extract": { bg: "#FFA500", text: "#1F2937" },
  "Lavender Extract": { bg: "#E6E6FA", text: "#1F2937" },
  "Lemon Balm Extract": { bg: "#98FB98", text: "#1F2937" },
  "Gotu Kola Extract": { bg: "#2E8B57", text: "#FFFFFF" },
  "Elderberry Extract": { bg: "#4B0082", text: "#FFFFFF" },
  "Grape Seed Extract": { bg: "#800080", text: "#FFFFFF" },
  "Black Cohosh Extract": { bg: "#A9A9A9", text: "#1F2937" },
  "Kudzu Extract": { bg: "#DDA0DD", text: "#1F2937" }
};

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

const HerbalPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Back */}
        <div className="mb-8">
          <Link to="/" className="text-green-600 hover:text-green-800 font-semibold flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Herbal Products</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our premium, high-potency herbal extracts.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {herbalProducts.map((product, index) => {
            const isHovered = hoveredProduct === product.name;
            const customColors = herbalHoverColors[product.name];

            return (
              <div 
                key={index} 
                onMouseEnter={() => setHoveredProduct(product.name)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ 
                  backgroundColor: isHovered && customColors ? customColors.bg : 'white' 
                }}
                className={`cursor-pointer rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-40 ${
                  isHovered && customColors ? '' : 'hover:bg-green-50'
                }`}
              >
                <h3 
                  className="text-lg font-bold mb-3 transition-colors duration-300"
                  style={{ color: isHovered && customColors ? customColors.text : '#111827' }}
                >
                  {product.name}
                </h3>
                <p 
                  className="text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: isHovered && customColors 
                      ? (customColors.text === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)') 
                      : '#F0FDF4', 
                    color: isHovered && customColors ? customColors.text : '#15803D' 
                  }}
                >
                  {product.scientific}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default HerbalPage;