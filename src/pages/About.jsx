import React, { useState } from 'react';

const About = () => {
  // State to handle the "Read more" toggle
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Main About Content */}
        <div className="mb-16 max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
          <p className="text-center text-lg mb-2">
            Scentorgo Overseas is a distinguished manufacture and export enterprise specializing in premium Agricultural Products, high-potency Herbal Extracts, and advanced Organic Fertilizers for global markets. Rooted in quality, integrity, and sustainability, we collaborate with certified growers, research-driven processing units, and modern production facilities to deliver products that meet the highest international standards.
            
            {/* Read More toggle for when it's closed */}
            {!isExpanded && (
              <span>... <button onClick={() => setIsExpanded(true)} className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Read more</button></span>
            )}
          </p>
          
          {/* Expanded Content */}
          {isExpanded && (
            <div className="text-left mt-8 space-y-6 animate-fade-in">
              <p>
                Every shipment reflects our commitment to purity, consistency, and excellence.
              </p>
              
              <div className="space-y-2">
                <p>• Our agricultural commodities are carefully sourced from fertile regions known for superior yield and quality.</p>
                <p>• Our herbal extracts are processed using advanced extraction technologies to preserve active compounds and maximize efficacy.</p>
                <p>• Our organic fertilizers are developed to support regenerative agriculture, improve soil vitality, and promote environmentally responsible farming practices.</p>
              </div>

              <div>
                <p className="mb-3 font-medium text-gray-800">
                  At Scentorgo Overseas, we believe that true excellence lies in precision, transparency, and long-term partnerships. We are committed to:
                </p>
                <ul className="space-y-3 pl-2">
                  <li className="flex gap-3"><span className="text-green-600">✔</span> Exceptional product quality and traceability</li>
                  <li className="flex gap-3"><span className="text-green-600">✔</span> Strict adherence to international compliance standards</li>
                  <li className="flex gap-3"><span className="text-green-600">✔</span> Sustainable sourcing and environmentally responsible practices</li>
                  <li className="flex gap-3"><span className="text-green-600">✔</span> Competitive global pricing with uncompromised standards</li>
                  <li className="flex gap-3"><span className="text-green-600">✔</span> Reliable logistics and on-time delivery worldwide</li>
                </ul>
              </div>

              {/* Read Less Button */}
              <div className="text-center mt-6">
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-green-600 font-medium hover:text-green-700 cursor-pointer"
                >
                  Read less
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">👁️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                To become a dominant global export leader in agricultural and natural solutions by setting new industry benchmarks in quality, supply chain efficiency, and market expansion.
              </p>
              <p>
                We aim to build a powerful international presence, penetrate emerging and established markets, and establish our brand as a preferred global supplier known for strength, scale, and performance.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                To aggressively expand our global footprint by delivering superior agricultural products, high-performance herbal extracts, and advanced organic fertilizers that exceed international quality standards.
              </p>
              <p>
                We are committed to operational excellence, strategic global partnerships, and continuous innovation — ensuring speed, scale, and reliability in every market we serve.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;