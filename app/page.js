import Image from "next/image";
import MarlinPhoto from '../public/images/marlin-photo.jpg';
import MarlinPhoto2 from '../public/images/marlin2.jpeg';
import ContactUs from '@/components/ContactUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Paragliding1 from '@/public/images/activities/paragliding1.jpg';
import BeachBiking1 from '@/public/images/activities/beach-biking1.jpg';
import Beach2 from '@/public/images/activities/beach2.jpg';
import Spa1 from '@/public/images/activities/spa1.jpg';
import Fishing6 from '@/public/images/fishing/fishing6.jpg';
import Fishing7 from '@/public/images/fishing/fishing7.jpg';
import Diving1 from '@/public/images/activities/diving1.jpg';
import Night1 from '@/public/images/downtown/night1.jpeg';
import Link from 'next/link';
import logoBlack from '@/public/assets/logoBlack.png';
import logoWhite from '@/public/assets/logoWhite.png';

import logoBlue from '@/public/assets/logoBlue.png';


const activities = [
  { name: 'Private Excursions', 
    description: 'We take our ATVs to go through the beautiful brazilian jungle and appear on the top of the cliffs, enjoying the amazing view of the blue Atlantic Ocean and its coral. After the ride we head for lunch to a beach club with great food and live music.\nWe also lead you on boat excursion to visit different beaches in the area, with a spectacular lunch on the beach.',
    slug: 'private-excursions',
    image: Beach2 
  },
  { name: 'Paragliding', 
    slug: 'paragliding',
    description: 'You will be paragliding with Ricardo, he is the 2024 champion paraglider in the state of Bahia, he gives the most spectacular flight over the beautiful cliff with an amazing view of the Atlantic Ocean and reefs.',
    image: Paragliding1 
  },
  { name: 'Scuba Diving', 
    description: 'We dive at the Royal Charlotte Bank, the largest coral bank in Brazil with the biggest variety of coral, marine fauna. The extension is of 65 miles and 9500 foot deep (3000 mts.) and connects with another Bank called Albrolhos. it was discovered in 2023 by a program of Petrobras.', 
    slug: 'scuba-diving',
    image: Diving1 
  },
  { name: 'Beach Biking', 
    description: 'We do it during the low tide, visiting lagoons that connect with the ocean, and making a stop at Lagoa Azul restaurant on the way back to enjoy a nice fresh drink and snack.',
    slug: 'beach-biking',
    image: BeachBiking1 
  },
  { name: 'Spa Treatments', 
    description: 'Relax and rejuvenate with our luxurious spa treatments.',
    slug: 'spa-treatments',
    image: Spa1 
  },
  { name: 'Nighttime Activities', 
    slug: 'nighttime-activities',
    description: "The nightlife in Arraial d'Ajuda has been growing in the last few years. It has great restaurants that serve local cuisine, and international (European & Argentinian) bars serving excellent drinks. 'Le Fantastique Monde de Benjamin' is a restaurant inspired from the 1920's, with waiters dressed like back in the days. Every night, you can come enjoy delicious cuisine and live music with Rock bands, Blues, Jazz, and Tango Shows.",
    image: Night1 
  }
];


export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={MarlinPhoto}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="scale-[1.2] translate-x-[10%]"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-35 flex flex-col items-center text-white px-4 py-28 lg:px-24">
          {/* Logo on the left */}
          <div className="pb-8">
            <Image
              src={logoWhite}
              alt="Nervous Marlin Logo"
              className="object-contain w-[250px] md:w-[400px]"
            />
          </div>
          
          {/* Text on the right */}
          <div className="text-center ">
            <h1 className="text-4xl font-bold mb-4">Discover Exceptional Blue Marlin Fishing in Bahia, Brazil</h1>
            <p className="text-lg mb-8">Experience the world-renowned fishing coast of Brazil</p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300">
                Contact Us
              </a>
              <a href="/book-now" className="bg-white border-2 text-sky-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-200 hover:text-sky-900 hover:border-sky-200 transition duration-300">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Marlin Fishing Section */}
      <section id="blue-marlin-fishing" className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Blue Marlin Fishing on the coast of Bahia</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-xl mb-8">Experience the thrill of catching the majestic Blue Marlin in the waters of Bahia, Brazil. Our expert guides and state-of-the-art equipment ensure a memorable fishing adventure.</p>
              <p className="text-xl mb-8">Our fishing excursions cater to both beginners and experienced anglers, offering a unique opportunity to catch this iconic species in its natural habitat.</p>
              <div className="flex justify-center">
                <a href="/fishing" className="bg-gray-800 text-white border-2 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 hover:text-gray-800 hover:border-gray-800 transition duration-300">
                  Discover More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={Fishing7}
                  alt="Blue Marlin Fishing"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300">Exciting Activities for Everyone</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.map((activity, index) => (
                  <Link href={`/activities/${activity.slug}`} key={index}>
                    <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={activity.image} 
                          alt={activity.name} 
                          layout="fill" 
                          objectFit="cover"
                          className="" 
                        />
                      </div>
                      <div className="p-6 text-gray-900">
                        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-800">{activity.name}</h3>
                        <p className="text-lg font-semibold transition-opacity duration-300 line-clamp-3">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          <div className="text-center mt-12">
            <a href="/activities" className="bg-transparent border-2 border-gray-800 text-grey-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300">
              See the activities that we plan for you
            </a>
          </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="py-8 sm:py-16 bg-gray-100 px-3">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm sm:text-lg font-semibold mb-4 flex-grow">
                &ldquo;I know Leo from my first trip in Posta del Norte and this stay in Bahia was again fantastic! 
                Leo always provides very high-quality service for his guests, and this time he even prepares other activities for those who are not fishing.
              </p>
              <p className="text-sm sm:text-lg font-semibold mb-4">
                The fishing conditions were amazing: great guides, equipment and the amongst the biggest marlins I&apos;ve seen.&rdquo;
              </p>
              <p className="sm:text-sm text-gray-600">- John D., Experienced Fisher</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="sm:text-xl font-semibold mb-4">
                &ldquo;I&apos;ve never fished before, but the guides made me feel so comfortable and taught me everything I needed to know. I caught my first fish and it was exhilarating!&rdquo;
              </p>
              <p className="sm:text-sm text-gray-600">- Emily G., Non-Experienced Fisher</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="sm:text-xl font-semibold mb-4">
                &ldquo;I&apos;m not a fisher, but I loved the variety of activities available. The spa day was amazing and the nighttime activities were so much fun!&rdquo;
              </p>
              <p className="sm:text-sm text-gray-600">- Sarah K., Non-Fisher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-100">
        <div className="max-w-4xl mx-auto text-lg">
          <h2 className="text-3xl font-bold text-center" id="contact">Contact Us</h2>
            <ContactUs />
        </div>
      </section>
      

      
    </div>
  );
}
