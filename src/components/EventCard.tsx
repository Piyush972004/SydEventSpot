import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Event } from '../types';
import { format } from 'date-fns';
import EmailModal from './EmailModal';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedDate = format(new Date(event.date), 'EEEE, MMMM d, yyyy');
  
  const handleGetTickets = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div 
          className="h-48 w-full bg-gray-200 relative overflow-hidden"
          style={{
            backgroundImage: `url(${event.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <span className="m-3 px-3 py-1 text-xs font-medium bg-accent-500 text-white rounded-full">
              {event.category}
            </span>
          </div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-primary-600 font-heading mb-2 line-clamp-2">
            {event.title}
          </h3>
          
          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-start">
              <Calendar className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-secondary-500" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-start">
              <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-secondary-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-secondary-500" />
              <span className="line-clamp-2">{event.venue} - {event.address}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {event.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-primary-600">{event.price}</span>
              <button 
                onClick={handleGetTickets}
                className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium text-sm flex items-center"
              >
                GET TICKETS 
                <ExternalLink className="ml-1" size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Source: {event.source}
            </p>
          </div>
        </div>
      </div>
      
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        eventId={event.id}
        eventTitle={event.title}
        ticketUrl={event.ticketUrl}
      />
    </>
  );
};

export default EventCard;