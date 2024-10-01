'use client';
import MarlinPhoto from '../../public/images/marlin-photo.jpg';
import Image from 'next/image';
import InputField from '../../components/InputFieldDark';
import { useState } from 'react';

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
  };

  return (
    <div className="font-sans">
      <section className="py-32 relative">
        <Image
          src={MarlinPhoto}
          alt="Marlin background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Book Your Fishing Adventure</h1>
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 text-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  darkMode={true}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  darkMode={true}

                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  darkMode={true}

                />
                <InputField
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  darkMode={true}

                />
              </div>
                <InputField
                label="Number of Guests"
                name="guests"
                type="number"
                placeholder="Number of guests"
                value={formData.guests}
                onChange={handleChange}
                darkMode={true}

              />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Any special requests or additional information"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  Send booking request
                </button>
              </div>
              <div>
                <p className="text-gray-300">A member of our team will get back to you.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
