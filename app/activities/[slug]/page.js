'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Hero from '@/components/Hero';
import { activities } from '../page';  // Import the activities array

export default function ActivityPage() {
  const { slug } = useParams();
  const activity = activities.find(a => a.slug === slug);

  if (!activity) {
    return <div>Activity not found</div>;
  }

  return (
    <div className="font-sans">
      <Hero
        imageSrc={activity.images[0]}
        title={activity.name}
        subtitle=""
        objectPosition="40%"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{activity.name}</h1>
        <p className="text-xl mb-12">{activity.description}</p>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activity.images.map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <div className="relative w-full" style={{ paddingTop: '75%' }}>
                <Image
                  src={img}
                  alt={`${activity.name} image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
