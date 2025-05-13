import React, { useState } from 'react';
import { Calendar, MapPin, Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-secondary-500/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-4 leading-tight">
            Discover <span className="text-accent-500">Sydney's</span> Best Events
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Find and experience the most exciting events happening in Sydney. From music and arts to food and festivals, we've got you covered.
          </p>
          
          {/* Search form */}
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg mb-8 max-w-xl">
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
              </div>
              <button 
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium flex items-center justify-center"
              >
                Find Events
              </button>
            </div>
          </form>
          
          {/* Quick stats */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center">
              <Calendar className="text-accent-500 mr-2" size={20} />
              <span className="text-white font-medium">100+ Events This Month</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-accent-500 mr-2" size={20} />
              <span className="text-white font-medium">30+ Venues Across Sydney</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,80C840,96,960,96,1080,80C1200,64,1320,32,1380,16L1440,0L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;