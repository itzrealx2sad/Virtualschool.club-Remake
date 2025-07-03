import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCartShopping, faCreditCard, faRocket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // The main navigation bar with a black blurred background and bottom border
    // To make the entire page black, you would typically add `bg-black` to a parent div
    // or the <body> tag in your main application's CSS or structure.
    <nav className="fixed w-full bg-transparent backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-8">
            {/* Synthra logo with gradient text */}
            <a className="font-semibold text-xl text-primary hover:scale-105 transition duration-300 text-transparent bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text" href="/">Synthra</a>
            {/* Desktop navigation links */}
            <div className="hidden md:flex space-x-8 pl-8">
              <a href="/" className="text-white hover:text-purple-400 transition-colors hover:scale-105 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                Home
              </a>
              <a href="/categories" className="text-white hover:text-purple-400 transition-colors hover:scale-105 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                Products
              </a>
              <a href="/topup" className="text-white hover:text-purple-400 transition-colors hover:scale-105 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                Topup
              </a>
              <a href="/status" className="text-white hover:text-purple-400 transition-colors hover:scale-105 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                Status
              </a>
            </div>
          </div>
          {/* Desktop Sign In/Sign Up buttons */}
          <div className="hidden md:flex space-x-4 relative">
            <a href="/login" className="px-4 py-2 text-white hover:text-purple-400 transition-colors">Sign In</a>
            <a href="/register" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">Sign Up</a>
          </div>
          {/* Mobile menu button (hamburger icon) */}
          <div className="md:hidden relative">
            <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            {/* Mobile menu dropdown */}
            <div className={`absolute right-0 mt-4 w-56 rounded-xl border text-card-foreground shadow border-white/[0.04] bg-black/80 backdrop-blur-md transition-all duration-300 ease-out transform ${isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="py-2 px-1">
                <a href="/" className="block px-4 py-3 text-white hover:text-purple-400 hover:bg-transparent/20 rounded-lg transition-colors flex items-center">
                  <FontAwesomeIcon icon={faHouse} className="mr-2" />
                  Home
                </a>
                <a href="/categories" className="block px-4 py-3 text-white hover:text-purple-400 hover:bg-transparent/20 rounded-lg transition-colors flex items-center">
                  <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                  Products
                </a>
                <a href="/topup" className="block px-4 py-3 text-white hover:text-purple-400 hover:bg-transparent/20 rounded-lg transition-colors flex items-center">
                  <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                  Topup
                </a>
                <a href="/status" className="block px-4 py-3 text-white hover:text-purple-400 hover:bg-transparent/20 rounded-lg transition-colors flex items-center">
                  <FontAwesomeIcon icon={faRocket} className="mr-2" />
                  Status
                </a>
                <div aria-orientation="horizontal" role="none" className="shrink-0 bg-white/10 h-[1px] w-full my-2"></div>
                <a href="/login" className="block px-4 py-3 text-white hover:text-purple-400 hover:bg-transparent/20 rounded-lg transition-colors">Sign In</a>
                <a href="/register" className="block px-4 py-3 text-white hover:text-purple-400 hover:bg-transparent/20 rounded-lg transition-colors">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
