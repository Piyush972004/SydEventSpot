import React, { useState, useEffect } from 'react';
import { Event, FilterOptions } from '../types';
import EventCard from './EventCard';
import EventFilter from './EventFilter';
import { fetchEvents, filterEvents } from '../services/eventService';
import { AlertCircle, Loader } from 'lucide-react';

interface EventListProps {
  searchQuery?: string;
}

const EventList: React.FC<EventListProps> = ({ searchQuery = '' }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterOptions>({
    category: 'All',
    date: 'All',
    venue: 'All',
  });

  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEvents();
        setEvents(data);
        setFilteredEvents(data);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error('Error fetching events:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      let filtered = filterEvents(
        events,
        filter.category,
        filter.date,
        filter.venue
      );

      // Apply search filter if query exists
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(event => 
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.venue.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query)
        );
      }

      setFilteredEvents(filtered);
    }
  }, [filter, events, searchQuery]);

  const handleFilterChange = (newFilter: FilterOptions) => {
    setFilter(newFilter);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader className="w-12 h-12 text-secondary-500 animate-spin mb-4" />
        <p className="text-gray-600 text-lg">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-red-600 text-lg mb-2">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section id="events" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-4">
            Upcoming Events in Sydney
          </h2>
          <p className="text-gray-600 text-lg">
            Discover and experience the most exciting events happening across Sydney.
          </p>
        </div>

        <EventFilter onFilterChange={handleFilterChange} initialFilter={filter} />

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No events found matching your criteria.</p>
            <button
              onClick={() => {
                setFilter({ category: 'All', date: 'All', venue: 'All' });
                setSearchQuery('');
              }}
              className="px-6 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventList;