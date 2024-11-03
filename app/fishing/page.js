'use client';
import Image from "next/image";
import ContactUs from '@/components/ContactUs';
import MarlinPhoto from '../../public/images/marlin-photo.jpg';
import Fishing0 from '@/public/images/activities/fishing1.jpg';
import Fishing1 from '@/public/images/fishing/fishing1.jpg';
import Fishing2 from '@/public/images/fishing/fishing2.jpg';
import Fishing3 from '@/public/images/fishing/fishing3.jpg';
import Fishing4 from '@/public/images/fishing/fishing4.jpg';
import Fishing5 from '@/public/images/fishing/fishing5.jpg';
import Fishing6 from '@/public/images/fishing/fishing6.jpg';
import Fishing7 from '@/public/images/fishing/fishing7.jpg';
import Boat1 from '@/public/images/fishing/boat1.jpg';
import Boat2 from '@/public/images/fishing/boat2.jpg';
import Boat3 from '@/public/images/fishing/boat3.jpg';
import RoyalCharlotteBank from '../../public/images/fishing/royalCharlotteBank.jpg'; 
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';

// Define the fishingPhotos array
const fishingPhotos = [
  { src: Fishing6, alt: "Fishing Photo 6" },
  { src: Fishing7, alt: "Fishing Photo 7" },
  { src: Fishing1, alt: "Fishing Photo 1" },
  { src: Fishing2, alt: "Fishing Photo 2" },
  { src: Fishing3, alt: "Fishing Photo 3" },
  { src: Fishing4, alt: "Fishing Photo 4" },
  { src: Fishing5, alt: "Fishing Photo 5" },
  
  // Add more photos as needed
];

export default function Fishing() {
  return (
    <div className="font-sans">
      
      <Hero
        imageSrc={MarlinPhoto}
        title="Discover one of the best Blue Marlin fishing spots in the world"
        subtitle="Experience the pristine waters of Bahia, Brazil"
        objectPosition="center 60%"
      />
      

      {/* Fishing Spot Description */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">The Ultimate Blue Marlin Fishing Destination</h2>
          <div className="max-w-4xl mx-auto text-lg">
            <p className="mb-4">
              The coast of the Bahian province is renowned for its exceptional Blue Marlin fishing conditions. With warm, crystal-clear waters and abundant marine life, this region offers anglers an unparalleled opportunity to catch the majestic Blue Marlin.
            </p>
            <p className="mb-4">
              We fish in the Royal Charlotte Bank, just off the coast of Arraial d&apos;Ajuda, where the continental shelf drops off rapidly, creating the perfect habitat for Blue Marlins and other pelagic species.
            </p>
            
            <p>
              Whether you are a seasoned angler or a novice fisherman, our expert guides and top-of-the-line equipment ensure an unforgettable fishing experience in one of the world&apos;s best Blue Marlin hotspots.
            </p>
          </div>
        </div>
      </section>

      {/* Fishing Service Section */}
      <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Expert-Led Blue Marlin Fishing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl max-w-lg mx-auto w-full"> {/* Added max-w-md and mx-auto */}
                  <div className="relative w-full h-0 pb-[66.67%]"> {/* 2:3 aspect ratio */}
                    <Image
                      src={Fishing7}
                      alt="Blue Marlin Fishing"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="left 20%"
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    Our local team boasts decades of combined experience in the waters off Bahia, Brazil.
                    Your captain will be Robson, he has been living in Arraial d&apos;Ajuda for 32 years and fishing Blue Marlin for 26 years.
                    He is greatly experienced and has a lot of stories to tell about his adventures.
                    His team&apos;s knowledge of the region&apos;s marine ecosystem and Blue Marlin behavior ensures you&apos;re always in the right spot at the right time.
                  </p>
                  <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    We are conscious of the need to conserve the fish that we love to pursue. In line with the
                    regulations here in Brazil, we release all of the marlin caught; no marlins caught are
                    killed.
                  </p>
                  <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    We provide the finest, state-of-the-art fishing equipment. You can find more information about the boat and equipment slightly below on this page.
                  </p>                  
                </div>
              </div>
            </div>
          </section>

           {/* RCB Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">The Royal Charlotte Bank</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={RoyalCharlotteBank}
                alt="Royal Charlotte Bank"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-md mb-4">
                The Royal Charlotte Bank is a remarkable underwater ecosystem discovered in 2023 by a Petrobras program. 
                It is the largest coral bank in Brazil, boasting an incredible diversity of marine life. 
                This vast underwater formation stretches for 65 miles and plunges to depths of 9,500 feet (3,000 meters).
                
              </p>

              <p className="text-md mb-4">
                Because of its spectacular geography, we have marlin fishing all year round, weather permitting.
                The best season however is from October to March.
              </p>

              <p className="text-md mb-4">
                The fishing records from over the years show the high season can start late September with
                lots of white marlin and blue marlin showing up. October has raised the most marlin
                over the years with December second and November third.

              </p>
              <p className="text-md mb-4">
                Varieties of otherfish you can catch include amberjack, bigeye tuna, yellowfin tuna, 
                trevally, red snapper, grouper, yellowtail snapper, and the list goes on.

              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Fishing Conditions Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Boat and Equipment</h2>
          <div className="max-w-4xl mx-auto text-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Fishing Boat</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Capacity for 4 anglers</li>
                  <li>2 Mercedes 352 turbo and intercooler engines, 250 HP</li>
                  <li>30 feet</li>
                  <li>15 knots</li>
                  <li>Travel time: approximately 1:40 hours</li>
                  <li>Garmin 521</li>
                  <li>Furuno FCV620 sonar (emergency)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Fishing Equipment</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>3 Shimano Tiagra 130 & 1 Shimano Tiagra 80</li>
                  <li>2 Daiwa 50 & 1 Penn 50</li>
                  <li>1 Shimano TLD 50</li>
                  <li>1 Shimano Tiagra 30</li>
                  <li>2 electric reels</li>
                  <li>1 Shimano Stella 18000 SW spinning reel</li>
                  <li>3 Penn spinning reels</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Departure: 6:00 AM to 3:00 PM from Arraial pier</li>
                <li>On-board service includes lunch, fresh natural juice, water, soda, and fresh fruits</li>
                <li>We recommend coming equiped with a spray jacket, sunblock, a hat, and polarized sunglasses</li>
                <li>If an angler or guest breaks or loses any fishing equipment, it will be added to their account at the end of the trip.
                  Other than that, there is no extra cost for fishing equipment or bait.
                </li>
                <li>You are always welcome to bring your own tackle, my crew will assemble and cheek the rigging to make sure it is in good shape. </li>
              </ul>
            </div>
          </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={Boat1}
              alt="Fishing equipment"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={Boat2}
              alt="Fishing boat"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={Boat3}
              alt="Fishing experience"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Fishing Photos Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
          <PhotoGallery photos={fishingPhotos} />
        </div>
      </section>

      {/* YouTube Video Embed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Experience the Thrill</h2>
          <div className="max-w-4xl mx-auto ">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/v2t4RGcZ3Sc"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
              ></iframe>
            </div>
          <p className="text-sm mt-4 italic text-center">
            Disclaimer: This video is not affiliated with Nervous Marlin Fishing Lodge. It is provided as an indication of the fishing conditions in the area.
          </p>
          </div>
        </div>
      </section>

      

      {/* Contact Us Section */}
      

      <section className="bg-gray-100">
        <div className="max-w-4xl mx-auto text-lg">  
          <h2 className="text-3xl font-bold text-center pt-8">Contact Us</h2>
            <ContactUs />
        </div>
      </section>
    </div>
  );
}
