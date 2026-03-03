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
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 transition-all">
      {/* Reduced py-4 to py-2 md:py-3 to make the navbar slimmer */}
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-3 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          {/* Adjusted height and added scale-110 to make it pop without expanding the navbar */}
          <img src={logo} alt="Scentorgo logo" className="h-12 lg:h-18 w-auto object-contain scale-155 origin-left" />
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
  );
};

export default Navbar;