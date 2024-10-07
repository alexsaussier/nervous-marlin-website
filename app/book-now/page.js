'use client';
import MarlinPhoto from '../../public/images/marlin-photo.jpg';
import Image from 'next/image';
import InputField from '../../components/InputField';
import { useState } from 'react';
import ContactUs from '@/components/ContactUs';

export default function BookNow() {
  

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
          <h2 className="text-3xl font-bold text-center text-gray-800">Book Your Fishing Adventure</h2>
          <ContactUs type_of_request="Booking" />
        </div>
        
        
        <div>
          <p className="text-gray-300">We will get back to you as soon as possible.</p>
        </div>
      </section>
    </div>
  );
}
