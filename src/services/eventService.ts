import axios from 'axios';
import { Event, EventCategory } from '../types';
import { mockEvents } from './mockData';

// In a real application, this would be an API endpoint that handles the scraping
// Due to CORS restrictions in browser environments, direct scraping isn't possible
// A backend service would need to handle the actual scraping
const API_URL = 'https://api.example.com/events';

let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function fetchEvents(): Promise<Event[]> {
  try {
    const now = Date.now();
    
    // Return cached data if it's fresh enough
    if (now - lastFetchTime < CACHE_DURATION) {
      return mockEvents;
    }
    
    // In a real application, we would use axios to fetch from the API
    // const response = await axios.get(API_URL);
    // return response.data;
    
    lastFetchTime = now;
    return mockEvents;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

export async function submitEmail(email: string, eventId: string, optIn: boolean): Promise<boolean> {
  try {
    // In a real application, we would post to an API
    // await axios.post(`${API_URL}/submit-email`, { email, eventId, optIn });
    
    // For this demo, we'll simulate a successful submission
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email submitted:', { email, eventId, optIn });
        resolve(true);
      }, 500);
    });
  } catch (error) {
    console.error('Error submitting email:', error);
    throw error;
  }
}

export function filterEvents(
  events: Event[], 
  category: EventCategory | 'All', 
  dateFilter: 'Today' | 'This Week' | 'This Month' | 'All',
  venue: string | 'All'
): Event[] {
  return events.filter(event => {
    // Filter by category
    if (category !== 'All' && event.category !== category) {
      return false;
    }
    
    // Filter by date
    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (dateFilter === 'Today') {
      const todayEnd = new Date(today);
      todayEnd.setHours(23, 59, 59, 999);
      if (eventDate < today || eventDate > todayEnd) {
        return false;
      }
    } else if (dateFilter === 'This Week') {
      const weekEnd = new Date(today);
      weekEnd.setDate(today.getDate() + 7);
      if (eventDate < today || eventDate > weekEnd) {
        return false;
      }
    } else if (dateFilter === 'This Month') {
      const monthEnd = new Date(today);
      monthEnd.setMonth(today.getMonth() + 1);
      if (eventDate < today || eventDate > monthEnd) {
        return false;
      }
    }
    
    // Filter by venue
    if (venue !== 'All' && event.venue !== venue) {
      return false;
    }
    
    return true;
  });
}