import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';
import { Event } from './types';
import { fetchEvents } from './services/eventService';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState<Event[]>([]);

  // Add animated fade-in effect for page elements
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      fadeInObserver.observe(element);
    });
    
    return () => {
      fadeElements.forEach(element => {
        fadeInObserver.unobserve(element);
      });
    };
  }, []);

  // Fetch events initially and set up polling
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };

    // Initial load
    loadEvents();

    // Set up polling every 5 minutes
    const pollInterval = setInterval(loadEvents, 5 * 60 * 1000);

    return () => clearInterval(pollInterval);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to events section
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero onSearch={handleSearch} />
        <EventList searchQuery={searchQuery} />
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-6">
                About Sydney Events
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Sydney Events is your comprehensive guide to what's happening in Sydney. We automatically gather information about events from across the city to bring you the most complete and up-to-date listings.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Our mission is to help Sydney residents and visitors discover amazing experiences, support local venues, and never miss out on the exciting events happening in this vibrant city.
              </p>
              <p className="text-gray-600 text-lg">
                From iconic venues like the Sydney Opera House to hidden gems in neighborhood pockets, we cover it all. Whether you're looking for live music, art exhibitions, food festivals, or family-friendly activities, Sydney Events has you covered.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;