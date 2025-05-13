import React, { useState, useEffect } from 'react';
import { FilterOptions, EventCategory } from '../types';
import { venues } from '../services/mockData';
import { Calendar, MapPin, Tag } from 'lucide-react';

interface EventFilterProps {
  onFilterChange: (filter: FilterOptions) => void;
  initialFilter: FilterOptions;
}

const categories: (EventCategory | 'All')[] = [
  'All', 'Music', 'Arts', 'Sports', 'Food', 'Festivals', 'Community', 'Nightlife', 'Family', 'Other'
];

const dateOptions = ['Today', 'This Week', 'This Month', 'All'];

const EventFilter: React.FC<EventFilterProps> = ({ onFilterChange, initialFilter }) => {
  const [filter, setFilter] = useState<FilterOptions>(initialFilter);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  const handleCategoryChange = (category: EventCategory | 'All') => {
    setFilter(prev => ({ ...prev, category }));
  };

  const handleDateChange = (date: 'Today' | 'This Week' | 'This Month' | 'All') => {
    setFilter(prev => ({ ...prev, date }));
  };

  const handleVenueChange = (venue: string | 'All') => {
    setFilter(prev => ({ ...prev, venue }));
  };

  return (
    <div className="mb-8">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md bg-white shadow-sm text-primary-600 font-medium flex items-center justify-center"
        >
          <Tag size={16} className="mr-2" />
          {showMobileFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Desktop Filters (always visible) and Mobile Filters (conditionally visible) */}
      <div className={`${showMobileFilter ? 'block' : 'hidden'} md:block bg-white rounded-lg shadow p-4 transition-all duration-300`}>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
          {/* Category Filter */}
          <div className="flex-1">
            <div className="flex items-center text-sm font-medium text-gray-600 mb-2">
              <Tag size={16} className="mr-2 text-secondary-500" />
              Category
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                    filter.category === category
                      ? 'bg-secondary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Date Filter */}
          <div className="flex-1">
            <div className="flex items-center text-sm font-medium text-gray-600 mb-2">
              <Calendar size={16} className="mr-2 text-secondary-500" />
              Date
            </div>
            <div className="flex flex-wrap gap-2">
              {dateOptions.map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateChange(date as any)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                    filter.date === date
                      ? 'bg-secondary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Venue Filter */}
          <div className="flex-1">
            <div className="flex items-center text-sm font-medium text-gray-600 mb-2">
              <MapPin size={16} className="mr-2 text-secondary-500" />
              Venue
            </div>
            <select
              value={filter.venue}
              onChange={(e) => handleVenueChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-secondary-500"
            >
              <option value="All">All Venues</option>
              {venues.map((venue) => (
                <option key={venue} value={venue}>
                  {venue}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFilter;