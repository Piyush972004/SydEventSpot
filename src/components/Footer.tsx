import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z" fill="currentColor" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 7L12 12L5 7" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="ml-2 text-xl font-bold font-heading">Sydney Events</h2>
            </div>
            <p className="text-white/80 mb-6">
              Your one-stop destination for discovering the best events happening in Sydney. From concerts and exhibitions to food festivals and community gatherings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#categories" className="text-white/80 hover:text-white transition-colors">Categories</a>
              </li>
              <li>
                <a href="#venues" className="text-white/80 hover:text-white transition-colors">Venues</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                info@sydneyevents.com
              </li>
              <li className="text-white/80">
                +61 2 1234 5678
              </li>
              <li className="text-white/80">
                123 Event Street, Sydney<br />
                NSW 2000, Australia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/70">
            &copy; {currentYear} Sydney Events. All rights reserved.
          </p>
          <p className="text-white/70 mt-2 md:mt-0">
            Designed with ❤️ in Sydney
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;