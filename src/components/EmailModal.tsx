import React, { useState } from 'react';
import { X } from 'lucide-react';
import { submitEmail } from '../services/eventService';
import toast from 'react-hot-toast';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: string;
  eventTitle: string;
  ticketUrl: string;
}

const EmailModal: React.FC<EmailModalProps> = ({ 
  isOpen, 
  onClose, 
  eventId, 
  eventTitle,
  ticketUrl
}) => {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  
  if (!isOpen) return null;
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setEmailError('');
    setIsSubmitting(true);
    
    try {
      await submitEmail(email, eventId, optIn);
      toast.success('Thanks! Redirecting you to the ticket page.');
      onClose();
      // Redirect to the ticket URL
      window.open(ticketUrl, '_blank');
    } catch (error) {
      toast.error('There was a problem submitting your email.');
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full animate-[fadeIn_0.3s_ease-out]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="text-xl font-bold text-primary-600 font-heading">
            Get Tickets
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-5">
          <p className="mb-4 text-gray-600">
            Enter your email to receive a link to "{eventTitle}" tickets and stay updated on similar events.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                placeholder="your@email.com"
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                  className="mt-1 mr-2"
                />
                <span className="text-sm text-gray-600">
                  I would like to receive email updates about events in Sydney. You can unsubscribe at any time.
                </span>
              </label>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-md transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? 'Processing...' : 'Continue to Tickets'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;