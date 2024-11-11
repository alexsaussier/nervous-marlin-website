'use client';

import HeroSection from '@/components/Hero';
import { useState } from 'react';
import Hero from '@/components/Hero';
import Pitinga from '@/public/images/activities/beach1.jpg';
import ContactUs from '@/components/ContactUs';

export default function Packages() {
    return(
    <div className='font-sans'>
        <Hero
        imageSrc={Pitinga}
        title="Pricing"
        subtitle=""
        />

        {/*Pricing Section*/}
        
        <section className="py-16 bg-gray-200 text-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Package 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="bg-gray-700 text-white p-6 text-center">
                            <h3 className="text-2xl font-bold mb-2">Accomodation and Activities</h3>
                            <p className="text-4xl font-bold">USD $600</p>
                            <p className="text-sm">per day and per person</p>
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold text-lg mb-4">Included:</h4>
                            <ul className="mb-6">
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Accomodation
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    All airport transfers and daily transfers
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Breakfast and all meals + drinks (soft drinks, local beer, sodas, water)
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Trilingual guide for all your activities (English, Spanish and Portuguese)
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    All activities (diving, paragliding, beach biking, boat excursions, ATV rides, spa, whale watching,etc.)
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    All Federal taxes and fees
                                </li>
                                
                            </ul>
                            <h4 className="font-bold text-lg mb-4">Not Included:</h4>
                            <ul>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    Marlin Fishing
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    Fishing equipment
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    Flight tickets
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    Extra transfers
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    House service tips
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Package 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="bg-gray-900 text-white p-6 text-center">
                            <h3 className="text-2xl font-bold mb-2">Blue Marlin Fishing</h3>
                            <p className="text-4xl font-bold">USD $500</p>
                            <p className="text-sm">per day and per person</p>
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold text-lg mb-4">Included:</h4>
                            <ul className="mb-6">
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    30-feet boat
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Fishing guide
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Fishing equipment
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Baits
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Fishing license
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Lunch and drinks
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    All Federal taxes and fees
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-8 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">Booking & Payment Policy</h3>
                            <ul className="space-y-2 text-black">
                                <li>• 50% non-refundable deposit required to secure your booking</li>
                                <li>• Full payment due 60 days before trip date</li>
                                <li>• Accepted payments: Credit Card, Wire Transfer</li>
                                <li>• We accept cash at the lodge for the remainder of the payment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        {/* Contact Form Section */}
        <section className="bg-white text-gray-800 py-12">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                    <ContactUs />
                </div>
        </section>
        
        
    </div>
    )
}