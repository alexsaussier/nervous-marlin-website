'use client'

import { useState } from 'react';
import InputField from './InputField';
import InputFieldDropdown from './InputFieldDropdown';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    dates: '',
    groupSize: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your inquiry. We will get back to you soon!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          country: '',
          dates: '',
          groupSize: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <InputField 
                label="First Name" 
                name="firstName" 
                type="text" 
                placeholder="Enter your first name" 
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <InputField 
                label="Last Name" 
                name="lastName" 
                type="text" 
                placeholder="Enter your last name" 
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <InputField 
                label="Email" 
                name="email" 
                type="email" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <InputField 
                label="Phone" 
                name="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputFieldDropdown 
              label="Country" 
              name="country" 
              options={[
                
                { value: 'Australia', label: 'Australia' },
                { value: 'Brazil', label: 'Brazil' },
                { value: 'Canada', label: 'Canada' },
                { value: 'Germany', label: 'Germany' },
                { value: 'France', label: 'France' },
                { value: 'Italy', label: 'Italy' },
                { value: 'Portugal', label: 'Portugal' },
                { value: 'Spain', label: 'Spain' },
                { value: 'Switzerland', label: 'Switzerland' },
                { value: 'United Kingdom', label: 'United Kingdom' },
                { value: 'United States', label: 'United States' },
                { value: 'Other', label: 'Other' },
              ]} 
              value={formData.country}
              onChange={handleChange}
            />
            <InputField 
              label="Approximate Dates" 
              name="dates" 
              type="text" 
              placeholder="Enter approximate dates" 
              value={formData.dates}
              onChange={handleChange}
            />
            <InputFieldDropdown 
              label="Approximate Group Size" 
              name="groupSize" 
              options={[
                { value: '1-6', label: '1 to 6' },
                { value: '6-10', label: '6 to 10' },
                { value: '10+', label: '10+' },
              ]} 
              value={formData.groupSize}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Ask us any questions that you have regarding your trip, or if we have availability for your dates!" 

            ></textarea>
          </div>
          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
              className="px-8 py-3 text-base font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
