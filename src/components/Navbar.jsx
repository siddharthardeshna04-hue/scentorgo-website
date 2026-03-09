import { useState } from "react";
import logo from "../assets/Scentorgo Export logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-between items-center w-full bg-green-800 text-white text-sm py-2 px-6 lg:px-8">
        
        {/* Phone Numbers - Stacked vertically */}
        <div className="flex flex-col gap-1">
          <a href="tel:+918490054441" className="flex items-center gap-2 hover:text-green-200 transition">
            <span>📞</span> +91 84900 54441
          </a>
          <a href="tel:+918401894441" className="flex items-center gap-2 hover:text-green-200 transition">
            <span>📞</span> +91 84018 94441
          </a>
        </div>
        
        {/* Email Addresses - Stacked vertically */}
        <div className="flex flex-col gap-1 items-end">
          <a href="mailto:sales@scentorgo.com" className="flex items-center gap-2 hover:text-green-200 transition">
            <span>✉️</span> sales@scentorgo.com
          </a>
          <a href="mailto:info@scentorgo.com" className="flex items-center gap-2 hover:text-green-200 transition">
            <span>✉️</span> info@scentorgo.com
          </a>
        </div>

      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 py-2 md:py-3 flex justify-between items-center">
          
         {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* Increased scale to [1.8] visually enlarges the logo without changing navbar height */}
            <img 
              src={logo} 
              alt="Scentorgo logo" 
              className="h-12 lg:h-18 w-auto object-contain scale-[1.15] lg:scale-[2] origin-left mt-4" 
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-green-600 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-4 shadow-xl pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium text-lg hover:text-green-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;