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
        imageSrc={activity.image}
        title={activity.name}
        subtitle=""
        objectPosition="40%"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{activity.name}</h1>
        <p className="text-xl mb-8">{activity.description}</p>
        {/* Add more detailed content about the activity here */}
        <p>WORK IN PROGRESS: Will add photos here</p>
      </div>
    </div>
  );
}
