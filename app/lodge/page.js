'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '@/components/Hero';

export default function Lodge() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);



  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Hero
        imageSrc="/images/new-house/house-outside.jpeg" 
        title="Lodge"
        subtitle="For Private Groups"
        objectPosition="40%"
      />
        

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900">6-Bedroom Lodge for Private Groups</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience luxury and comfort in our exclusive 6-bedroom lodge, designed for private groups seeking the ultimate fishing and relaxation retreat. Complete with professional chef, waiter service, and trilingual host.
              </p>
              <div className="flex gap-4">
                <a href="/book-now">
                  <button className="bg-blue-200 text-sky-800 px-8 py-3 rounded-lg hover:bg-blue-300 transition">
                    Reserve Your Stay
                  </button>
                </a>
                
                <a href="#lodge-details">
                  <button className="border border-blue-200 text-sky-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                    Explore the Lodge
                  </button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/new-house/house-outside.jpeg"
                  alt="Lodge exterior view"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/new-house/bedroom.jpeg"
                  alt="Lodge bedroom view"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Lodge Details - Image Gallery */}
      <section id="lodge-details" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Lodge Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Outside Image */}
            <div className="space-y-4" data-aos="fade-up">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/new-house/house-outside.jpeg"
                  alt="Lodge exterior view"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Bedroom Image */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/new-house/bedroom.jpeg"
                  alt="Lodge bedroom view"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Swimming Pool Image */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/new-house/swimming pool.jpeg"
                  alt="Lodge swimming pool view"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* More Images Coming Soon Note */}
          <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="600">
            <p className="text-gray-600 italic">
              📸 More photos coming soon!
            </p>
          </div>
        </div>
      </section>


      {/* Amenities Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Lodge Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "🛏️", 
                title: "6 Bedrooms", 
                description: (
                  <>
                    • 6 bedrooms with private bathrooms<br />
                    • 1 Queen size bed per room<br />
                    • 1 Single bed per room
                  </>
                )
              },
              { 
                icon: "👥", 
                title: "Private Groups Only", 
                description: "Exclusive accommodation for your group - no sharing with strangers"
              },
              { 
                icon: "🏊‍♂️", 
                title: "Swimming Pool", 
                description: "Private swimming pool for relaxation after your fishing adventures"
              },
              { 
                icon: "👨‍🍳", 
                title: "Professional Chef", 
                description: "Dedicated chef to prepare all your meals with local and international cuisine"
              },
              { 
                icon: "🍽️", 
                title: "Waiter Service", 
                description: "Professional waiter service to ensure a seamless dining experience"
              },
              { 
                icon: "🗣️", 
                title: "Trilingual Host", 
                description: "Professional trilingual host to assist with all your needs and local guidance"
              },
            ].map((amenity, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Group Policy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Booking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md" data-aos="fade-up">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-4">Lodge Details</h3>
              <div className="text-gray-600 space-y-2">
                <p>• 6 bedrooms with private bathrooms</p>
                <p>• Accommodates up to 12 guests</p>
                <p>• Private groups only - exclusive use</p>
                <p>• All meals and service included</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🎣</div>
              <h3 className="text-xl font-semibold mb-4">Perfect for Everyone</h3>
              <div className="text-gray-600 space-y-2">
                <p>• Ideal for families, friends, and corporate groups</p>
                <p>• Non-anglers can enjoy pool, activities, and relaxation</p>
                <p>• Professional service ensures comfort for all guests</p>
                <p>• All activities included in the daily rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-200 to-blue-300 text-sky-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Private Lodge Experience?</h2>
          <p className="text-xl mb-8">
            Contact us today to book your exclusive stay and create unforgettable memories with your group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-now" className="bg-white text-sky-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Your Stay
            </a>
            <a href="/packages" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-sky-800 transition font-semibold">
              View Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}