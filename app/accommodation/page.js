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

export default function Accommodation() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  // Group images by category
  const outsideImages = [...IMAGES.house, ...IMAGES.exterior];
  const bedroomImages = IMAGES.bedrooms;
  const bathroomImages = IMAGES.bathrooms;
  const kitchenImages = IMAGES.kitchen;
  const livingImages = IMAGES.living;

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
        imageSrc={IMAGES.house[1]}
        title="Accommodation"
        subtitle=""
        objectPosition="40%"
      />
        

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900">8-Bedroom Beach Lodge in Arraial d&apos;Ajuda</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our beachfront lodge offers an unparalleled blend of comfort and natural beauty. 
                With accommodation for up to 13 guests, modern amenities, and breathtaking ocean views, 
                this is the perfect place to relax after a long day of fishing.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 mb-4 max-w-lg">
                  <a href="/book-now" className="flex-1">
                    <button className="w-full border border-blue-200 bg-blue-200 text-sky-800 px-8 py-3 rounded-lg hover:bg-blue-300 transition">
                      Reserve Your Stay
                    </button>
                  </a>
                  
                  <a href="#lodge-details" className="flex-1">
                    <button className="w-full border border-blue-200 text-sky-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                      Explore the Lodge
                    </button>
                  </a>
                </div>
                
                <div className="flex max-w-lg">
                  <a href="accommodation/small-groups" className="w-full">
                    <button className="w-full border border-blue-200 bg-blue-200 font-semibold text-sky-800 px-8 py-3 rounded-lg hover:bg-blue-300 transition">
                      Less than 8 guests? Explore our lodge for smaller groups
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              <Image 
                src={IMAGES.house[0]} 
                alt="House exterior" 
                width={500}    // Add width
                height={384}   // Add height
                className="rounded-lg w-full h-64 object-cover" 
              />
              <Image 
                src={IMAGES.house[1]} 
                alt="House exterior" 
                width={500}    // Add width
                height={384}   // Add height
                className="rounded-lg w-full h-64 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Galleries */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="exterior" className="w-full">
            <div id="lodge-details" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Explore Our Lodge</h2>
              <TabsList className="inline-flex bg-white p-1 mb-4 rounded-full flex-wrap justify-center gap-2">
                <TabsTrigger value="exterior" className="px-4 py-2 text-sm sm:px-6 sm:text-base">Exterior</TabsTrigger>
                <TabsTrigger value="bedrooms" className="px-4 py-2 text-sm sm:px-6 sm:text-base">Bedrooms</TabsTrigger>
                <TabsTrigger value="living" className="px-4 py-2 text-sm sm:px-6 sm:text-base">Living Areas</TabsTrigger>
                <TabsTrigger value="kitchen" className="px-4 py-2 text-sm sm:px-6 sm:text-base">Kitchen</TabsTrigger>
                <TabsTrigger value="bathrooms" className="px-4 py-2 text-sm sm:px-6 sm:text-base">Bathrooms</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="exterior" className="mt-8">
              <ImageGrid images={outsideImages} label="Exterior" />
            </TabsContent>

            <TabsContent value="bedrooms" className="mt-8">
              <ImageGrid images={bedroomImages} label="Bedroom" />
            </TabsContent>

            <TabsContent value="living" className="mt-8">
              <ImageGrid images={livingImages} label="Living area" />
            </TabsContent>

            <TabsContent value="kitchen" className="mt-8">
              <ImageGrid images={kitchenImages} label="Kitchen" />
            </TabsContent>

            <TabsContent value="bathrooms" className="mt-8">
              <ImageGrid images={bathroomImages} label="Bathroom" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Lodge Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🛏️", title: "8 Bedrooms", 
                description: <>
                  Private bathrooms in each room.<br />
                  • 4 bedrooms with queen bed and single bed<br />
                  • 3 bedrooms with queen bed<br />
                  • 1 bedroom with 2 single beds
                </> },
              { icon: "👨‍👩‍👧‍👦", title: "Group Friendly", description: "Accommodates up to 13 guests" },
              { icon: "🏊‍♂️", title: "Modern Amenities", description: "Swimming pool, jacuzzi, outdoor bar, and pool table" },
              { icon: "🎣", title: "Private Beach Access", description: "Direct access to the beach" },
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
                <p>• Minimum group size: 8 people or 4 couples</p>
                <p>• Private groups only</p>
                <p>• Alternative accommodation available for smaller groups in another beautiful lodge</p>
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

