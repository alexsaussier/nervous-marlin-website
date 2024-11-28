'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from '@/components/Carousel';
import { Card, CardContent } from '@/components/Card';
import { TabsContent, TabsList, TabsTrigger, Tabs } from '@/components/Tabs';
import Hero from '@/components/Hero';
import { IMAGES } from '@/utils/images';

export default function SmallGroups() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  // Define the image arrays at the top level after the useEffect
  const outsideImages = IMAGES.smallGroups.outside || [];
  const bedroomImages = IMAGES.smallGroups.bedrooms || [];
  const livingImages = IMAGES.smallGroups.living || [];
  const kitchenImages = IMAGES.smallGroups.kitchen || []; // Add kitchen images array
  const bathroomImages = IMAGES.smallGroups.bathrooms || [];

  // Single state for all tabs
  const [showAllImages, setShowAllImages] = React.useState(false);

  const ImageGrid = ({ images, label }) => {
    const imagesToShow = showAllImages ? images : images.slice(0, 8);
    const hasMore = images.length > 8;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {imagesToShow?.map((img, index) => (
            <div key={index} className="aspect-[4/3] md:aspect-square relative group" data-aos="fade-up">
              {img && (
                <Image
                  src={img}
                  alt={`${label} view ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  loading={index > 3 ? "lazy" : "eager"}
                  quality={75}
                  className="object-cover rounded-lg transition-transform"
                />
              )}
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setShowAllImages(!showAllImages)}
              className="bg-blue-200 text-sky-800 px-6 py-2 rounded-lg hover:bg-blue-300 transition"
            >
              {showAllImages ? 'Show Less' : `Show More`}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Hero
        imageSrc={IMAGES.smallGroups.outside[0]} // Use the first outside image or specify a hero image
        title="Accommodation"
        subtitle="Smaller Groups"
        objectPosition="40%"
      />
        

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900">3-Bedroom Lodge for Smaller Groups</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We host smaller groups in our 3-bedroom modern lodge with private garden and pool.
              </p>
              <div className="flex gap-4">
                <a href="/book-now">
                  <button className="bg-blue-200 text-sky-800 px-8 py-3 rounded-lg hover:bg-blue-300 transition" href="/book-now">
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
              <Image 
                src={IMAGES.smallGroups.outside[0]} // Use specific images from your collection
                alt="Lodge exterior" 
                width={500}
                height={384}
                className="rounded-lg w-full h-64 object-cover" 
              />
              <Image 
                src={IMAGES.smallGroups.outside[1]} 
                alt="Lodge exterior" 
                width={500}
                height={384}
                className="rounded-lg w-full h-64 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Galleries */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div id="lodge-details" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Explore Our Lodge</h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Exterior</h3>
              <ImageGrid images={outsideImages} label="Exterior" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Bedrooms</h3>
              <ImageGrid images={bedroomImages} label="Bedroom" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Living Areas</h3>
              <ImageGrid images={livingImages} label="Living area" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Bathrooms</h3>
              <ImageGrid images={bathroomImages} label="Bathroom" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Lodge Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🛏️", title: "3 Bedrooms", 
                description: <>
                  • 2 bedroom suites with Queen-sized beds<br />
                  • 1 bedroom with two single beds<br />
                </> },
              { icon: "👨‍👩‍👧‍👦", title: "For Smaller Groups", description: "Accommodates from 2 to 5 guests" },
              { icon: "🏊‍♂️", title: "Modern Amenities", description: "Modern house with private swimming pool, and garden" },
              { icon: "🌊", title: "Proximity to Arraial d'Ajuda", description: "The house is located just outside of Arraial d'Ajuda" },
              { icon: "🗣️", title: "Trilingual Host", description: "Professional guide available" },
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
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-4">Group Requirements</h3>
              <div className="text-gray-600 space-y-2">
                <p>• Group size: 2 to 5 people</p>
                <p>• Private groups only</p>
                <p>• Alternative accommodation available for larger groups in another beautiful oceanview lodge</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🎣</div>
              <h3 className="text-xl font-semibold mb-4">Perfect for Everyone</h3>
              <div className="text-gray-600 space-y-2">
                <p>• Bring your whole family, friends, and spouse</p>
                <p>• While anglers enjoy their fishing day, non-anglers can participate in various included activities</p>
                <p>• All activities included in the daily rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-200 to-blue-300 text-sky-800">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Nervous Marlin Fishing Lodge and create unforgettable memories in Bahia.
          </p>
          <a href="/book-now">  
            <button className="bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Reserve Your Stay
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

