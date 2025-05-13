import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarDays, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-secondary-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z" fill="currentColor" stroke="#0B3954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V12" stroke="#0B3954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 7L12 12L5 7" stroke="#0B3954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className={`ml-2 text-xl font-bold font-heading ${isScrolled ? 'text-primary-500' : 'text-white'}`}>
              Sydney Events
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#events" 
              className={`font-medium transition-colors duration-300 hover:text-accent-500 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              Events
            </a>
            <a 
              href="#categories" 
              className={`font-medium transition-colors duration-300 hover:text-accent-500 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              Categories
            </a>
            <a 
              href="#venues" 
              className={`font-medium transition-colors duration-300 hover:text-accent-500 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              Venues
            </a>
            <a 
              href="#about" 
              className={`font-medium transition-colors duration-300 hover:text-accent-500 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              About
            </a>
          </nav>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary-500 ${
                isScrolled ? 'text-primary-500' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <a
              href="#events"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-secondary-50 hover:text-secondary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <a
              href="#categories"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-secondary-50 hover:text-secondary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#venues"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-secondary-50 hover:text-secondary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Venues
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-secondary-50 hover:text-secondary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;