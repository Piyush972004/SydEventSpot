export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  category: EventCategory;
  imageUrl: string;
  ticketUrl: string;
  price: string;
  source: string;
}

export type EventCategory = 
  | 'Music'
  | 'Arts'
  | 'Sports'
  | 'Food'
  | 'Festivals'
  | 'Community'
  | 'Nightlife'
  | 'Family'
  | 'Other';

export interface EmailSubmission {
  email: string;
  eventId: string;
  optIn: boolean;
}

export interface FilterOptions {
  category: EventCategory | 'All';
  date: 'Today' | 'This Week' | 'This Month' | 'All';
  venue: string | 'All';
}