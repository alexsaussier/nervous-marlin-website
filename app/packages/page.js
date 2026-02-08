'use client';

import HeroSection from '@/components/Hero';
// import { useState } from 'react'; // UNUSED - kept for reference if re-enabling multi-package display
import Hero from '@/components/Hero';
import Pitinga from '@/public/images/activities/beach6.jpg';
import ContactUs from '@/components/ContactUs';

import { Fish, Users, Calendar, User } from 'lucide-react'

import { Button } from "@/components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"
import { CheckIcon, CrossIcon } from '@/components/CheckIcon'


export default function Packages() {
    // Currently displaying only: 4 anglers, 3 fishing days
    const displayedPrice = 3570;
    const displayedAnglers = 4;
    const displayedDays = 3;

    /* UNUSED - Full pricing table kept for reference
    const [selectedAnglers, setSelectedAnglers] = useState(2)
    const anglerPrices = {
        2: {
          3: 4200,
          4: 5150,
          6: 6650,
        },
        3: {
          3: 3880,
          4: 4770,
          6: 5580,
        },
        4: {
          3: 3570,
          4: 3990,
          6: 4980,
        },
      }
    */

    return(
    <div className='font-sans'>
        <Hero
        imageSrc={Pitinga}
        title="Packages"
        subtitle=""
        objectPosition="center"
        />

        {/*Pricing Section*/}
        
        <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl text-gray-800 text-center font-bold sm:text-4xl md:text-5xl">Our Packages</h2>
        <div className="mx-auto max-w-5xl pt-8">
          <Tabs defaultValue="angler" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="angler">Angler Packages</TabsTrigger>
              <TabsTrigger value="non-angler">Non-Angler Package</TabsTrigger>
            </TabsList>
            
            {/*Non-Angler Package*/}
            <TabsContent value="non-angler" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Accommodation & Activities</CardTitle>
                  <CardDescription>For non-fishing guests</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">$350</span>
                    <span className="text-gray-500">per person/day</span>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      Accommodation
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      All airport transfers and daily transfers
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      Breakfast, lunch, dinner and drinks (soft drinks, local beer, wine, sodas, water)
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      Trilingual guide (English, Spanish, Portuguese)
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      All activities (diving, paragliding, beach biking, boat excursions, ATV rides, spa, whale watching,etc.)
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      All federal taxes and fees
                    </div>
                    <p className="text-gray-800 font-bold">Not included</p>
                    <div className="flex items-center gap-2">
                      <CrossIcon />
                      Fishing
                    </div>
                    <div className="flex items-center gap-2">
                      <CrossIcon />
                      Flight tickets
                    </div>
                    <div className="flex items-center gap-2">
                      <CrossIcon />
                      Extra transfers
                    </div>
                    <div className="flex items-center gap-2">
                      <CrossIcon />
                      House service tips
                    </div>
                </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => window.location.href = '/book-now'}>Book Now</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/*Angler Packages*/}
            <TabsContent value="angler" className="mt-6">
              <div className="grid gap-6">
                {/* Single package display: 4 anglers, 3 fishing days */}
                <div className="flex justify-center">
                  <Card className="max-w-md w-full">
                    <CardHeader>
                      <CardTitle className="flex text-gray-800 items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        {displayedDays} Fishing Days Package | {displayedDays + 2} nights
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <span className="flex gap-1">
                          <User className="h-5 w-5" />
                          <User className="h-5 w-5" />
                          <User className="h-5 w-5" />
                          <User className="h-5 w-5" />
                        </span>
                        For {displayedAnglers} anglers/boat
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex flex-col items-center justify-between">
                        <span className="text-2xl font-bold">
                          ${displayedPrice}
                        </span>
                        <span className="text-gray-500">
                          per person
                        </span>
                      </div>
                      <div className="text-center text-sm text-green-600 font-medium bg-green-50 rounded-md py-2 px-3">
                        Includes 1 extra night FREE
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={() => window.location.href = '/book-now'}>Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
                <p className="text-center text-sm text-gray-600">
                  Looking for a different package? <a href="#contact" className="text-blue-600 hover:underline">Contact us</a> for a custom stay.
                </p>

                {/* UNUSED - Original angler selector and multi-package display kept for reference
                <div className="flex justify-center space-x-4">
                  <Button
                    variant={selectedAnglers === 2 ? "default" : "outline"}
                    onClick={() => setSelectedAnglers(2)}
                  >
                    2 Anglers
                  </Button>
                  <Button
                    variant={selectedAnglers === 3 ? "default" : "outline"}
                    onClick={() => setSelectedAnglers(3)}
                  >
                    3 Anglers
                  </Button>
                  <Button
                    variant={selectedAnglers === 4 ? "default" : "outline"}
                    onClick={() => setSelectedAnglers(4)}
                  >
                    4 Anglers
                  </Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[3, 4, 6].map((days) => (
                    <Card key={days}>
                      <CardHeader>
                        <CardTitle className="flex text-gray-800 items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          {days} Fishing Days Package | {days+1} nights
                        </CardTitle>
                        <CardDescription>
                          For {selectedAnglers} anglers/boat
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className="flex flex-col items-center justify-between">
                          <span className="text-2xl font-bold">
                            ${anglerPrices[selectedAnglers][days]} 
                          </span>
                          <span className="text-gray-500">
                            per person
                          </span>                        
                        </div>
                        
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => window.location.href = '/book-now'}>Book Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                */}
                
                {/*What's included*/}
                <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
                    <h3 className="mb-4 text-lg font-bold">What&apos;s included</h3>
                    <div className="grid gap-2 mb-4">
                        
                        <p className="text-gray-800 font-bold"> Fishing </p>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        30-feet fishing boat
                        </div>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        Professional fishing guide
                        </div>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        All fishing equipment
                        </div>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        Baits
                        </div>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        Fishing license
                        </div>
                        
                        

                        <p className="text-gray-800 font-bold"> General </p>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        Accommodation
                        </div>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        All airport transfers and daily transfers
                        </div>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        Breakfast, and all meals and drinks (soft drinks, local beer, sodas, water)
                        </div>
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        Trilingual guide (English, Spanish, Portuguese)
                        </div>
                        
                        <div className="flex items-center gap-2">
                        <CheckIcon />
                        All federal taxes and fees
                        </div>
                    
                    </div>

                    <h3 className="mb-4 text-lg font-bold">Not included</h3>
                    <div className="grid gap-2">
                    
                        <div className="flex items-center gap-2">
                        <CrossIcon />
                        Flight tickets
                        </div>
                        <div className="flex items-center gap-2">
                        <CrossIcon />
                        Extra transfers
                        </div>
                        <div className="flex items-center gap-2">
                        <CrossIcon />
                        House service tips
                        </div>
                    </div>

                </div>


              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 rounded-lg bg-white p-6 text-gray-800 shadow-lg">
            <h3 className="mb-4 text-lg font-bold">Booking & Payment Policy</h3>
            <ul className="grid gap-2 text-sm">
            <li className="flex items-center gap-2">
                • 50 % deposit is required to reserve your requested fishing dates.
              </li>
              <li className="flex items-center gap-2">
                • Free cancellation up to 60 days before trip date
              </li>
              <li className="flex items-center gap-2">
                • If cancelling less than 60 days before trip date, 50% of deposit will be lost.
              </li>
              <li className="flex items-center gap-2">
                • Full payment due 60 days before trip date
              </li>
              <li className="flex items-center gap-2">
                • Accepted payments: Wire Transfer
              </li>
              <li className="flex items-center gap-2">
                • Cash accepted at the lodge for remaining balance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

        
        {/* Contact Form Section */}
        <section id="contact" className="bg-gray-200 text-gray-800 py-12">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                    <ContactUs />
                </div>
        </section>
        
        
    </div>
    )
}