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
      <section className="relative min-h-[120vh]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={MarlinPhoto}
            alt="Hero Image"
            fill={true}
            objectFit="cover"
            className="scale-[1.2] translate-x-[10%] brightness-[1.1] contrast-[0.4] saturate-[0.9]"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-white px-4 py-24 lg:px-24 min-h-[120vh]">
          {/* Logo */}
          <div className="pb-4 md:mb-4">
            <Image
              src={logoWhite}
              alt="Nervous Marlin Logo"
              className="object-contain w-[150px] md:w-[200px]"
            />
          </div>
          
          {/* Two feature squares with enhanced shadow for better visibility */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full max-w-5xl mb-8">
            {/* Fishing Square - with link to /fishing */}
            <Link href="/fishing" className="w-full md:w-1/2">
              <div className="h-[200px] md:h-auto md:aspect-[4/3] relative rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 shadow-lg">
                <Image
                  src={MarlinPhoto}
                  alt="Blue Marlin Fishing"
                  fill={true}
                  objectFit="cover"
                  className="group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300">
                  <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white group-hover:text-blue-200 transition">Blue Marlin & Big Game Fishing in Brazil</h2>
                  <p className="text-white text-xs md:text-base group-hover:text-blue-50">World-class fishing experience on Brazil&apos;s coast</p>
                </div>
              </div>
            </Link>
            
            {/* Non-Angler Activities Square with same enhancements */}
            <Link href="/activities" className="w-full md:w-1/2">
              <div className="h-[200px] md:h-auto md:aspect-[4/3] relative rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 shadow-lg">
                <Image
                  src={Paragliding1}
                  alt="Non-Angler Activities"
                  fill={true}
                  objectFit="cover"
                  className="group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300">
                  <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white group-hover:text-blue-200 transition">Non-Angler Activities</h2>
                  <p className="text-white text-xs md:text-base group-hover:text-blue-50">Paragliding, spa treatments, beach excursions & more</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Buttons centered below the squares */}
          <div className="flex flex-row justify-center space-x-4 w-full max-w-5xl">
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-white hover:text-sky-800 transition duration-300 text-center">
              Contact Us
            </a>
            <a href="/book-now" className="bg-white border-2 border-transparent text-sky-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-sky-200 hover:text-sky-800 hover:border-sky-200 transition duration-300 text-center">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Blue Marlin Fishing Section */}
      <section id="blue-marlin-fishing" className="py-16 bg-gray-200 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Learn more about our Blue Marlin Fishing</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-xl mb-8">Experience the thrill of catching the majestic Blue Marlin in the waters of Bahia, Brazil. Our expert guides and state-of-the-art equipment ensure a memorable fishing adventure.</p>
              <p className="text-xl mb-8">Our fishing excursions cater to both beginners and experienced anglers, offering a unique opportunity to catch this iconic species in its natural habitat.</p>
              <div className="flex justify-center">
                <a href="/fishing" className="bg-blue-200 text-sky-800 text-lg font-semibold px-8 py-3 rounded-lg hover:bg-blue-300 transition">
                  Discover More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={Fishing7}
                  alt="Blue Marlin Fishing"
                  fill={true}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white text-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300">Exciting Activities for Non-Anglers</h2>
              <p className="text-lg text-center max-w-4xl mx-auto mb-8 text-gray-700">
                We&apos;ve curated a diverse range of activities for family and friendsto ensure everyone has an unforgettable experience in Bahia. 
                Whether you are traveling with family, friends, or partners who prefer adventures beyond fishing, our non-angler activities provide the perfect complement to our world-class fishing excursions.
                Activities will be catered to your preferences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.map((activity, index) => (
                  <Link href={`/activities/${activity.slug}`} key={index}>
                    <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={activity.image} 
                          alt={activity.name} 
                          fill={true}
                          objectFit="cover"
                          className="" 
                        />
                      </div>
                      <div className="p-6 text-gray-800">
                        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-800">{activity.name}</h3>
                        
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          <div className="text-center mt-12">
            <a href="/activities" className="bg-blue-200 text-sky-800 text-lg font-semibold px-8 py-3 rounded-lg hover:bg-blue-300 transition">
              See the activities that we plan for you
            </a>
          </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large Groups House */}
            <Link href="/accommodation">
              <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src='https://asaussier-projects.s3.amazonaws.com/images/airbnb/house_2.jpeg'
                    alt="Large Groups Villa"
                    fill={true}
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-sky-800">Large Groups Villa (8+ Guests)</h3>
                  <p className="text-gray-600">
                    Perfect for large groups and families, our main villa offers spacious living areas, multiple bedrooms, and stunning ocean views. Experience luxury and comfort in our premier accommodation.
                  </p>
                </div>
              </div>
            </Link>

            {/* Small Groups House */}
            <Link href="/accommodation/small-groups">
              <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="https://asaussier-projects.s3.amazonaws.com/images/small-groups/small-house-outdoor1.jpeg"
                    alt="Small Groups House"
                    fill={true}
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-sky-800">Cozy House for Smaller Groups</h3>
                  <p className="text-gray-600">
                    Ideal for smaller groups, our cozy house provides an intimate setting with all the amenities you need for a comfortable stay. Perfect for couples or small families.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Discover More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* About Us Square */}
            <Link href="/about-us">
              <div className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20">
                <Image
                  src={MarlinPhoto2}
                  alt="About Us"
                  fill={true}
                  objectFit="cover"
                  className="group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-blue-200 transition">About Us</h2>
                  <p className="text-white text-sm md:text-base group-hover:text-blue-50">Learn about our team and experience</p>
                </div>
              </div>
            </Link>
            
            {/* Location Square */}
            <Link href="/location">
              <div className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20">
                <Image
                  src={Beach2}
                  alt="Location"
                  fill={true}
                  objectFit="cover"
                  className="group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-blue-200 transition">Location</h2>
                  <p className="text-white text-sm md:text-base group-hover:text-blue-50">Explore beautiful Bahia, Brazil</p>
                </div>
              </div>
            </Link>
            
            {/* Packages Square */}
            <Link href="/packages">
              <div className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20">
                <Image
                  src={Fishing6}
                  alt="Packages"
                  fill={true}
                  objectFit="cover"
                  className="group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-blue-200 transition">Packages</h2>
                  <p className="text-white text-sm md:text-base group-hover:text-blue-50">View our all-inclusive options</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="py-8 sm:py-16 bg-white text-gray-800 px-3">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column with stacked testimonials */}
            <div className="flex flex-col gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-sm sm:text-lg font-semibold mb-4 flex-grow">
                  &ldquo;I know Leo from my first trip in Posta del Norte and this stay in Bahia was again fantastic! 
                  Leo always provides very high-quality service for his guests, and this time he even prepares other activities for those who are not fishing.
                </p>
                <p className="text-sm sm:text-lg font-semibold mb-4">
                  The fishing conditions were amazing: great guides, equipment and the amongst the biggest marlins I&apos;ve seen.&rdquo;
                </p>
                <p className="sm:text-sm text-gray-600">- John D., Experienced Fisher</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="sm:text-lg font-semibold mb-4">
                  &ldquo;I&apos;ve never fished before, but the guides made me feel so comfortable and taught me everything I needed to know. I caught my first Wahoo in Brazil!&rdquo;
                </p>
                <p className="sm:text-sm text-gray-600">- Emily G., Non-Experienced Fisher</p>
              </div>
            </div>
            {/* Right column with longer testimonial */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full">
              <p className="sm:text-lg font-semibold mb-4">
                &ldquo;I invited my husband for his 60th anniversary, we came with three other couples. The guys had a blast fishing.
                I&apos;m not a fisher, but I loved the variety of activities available for non-fishers. Our daily program was a lot fun,
                and the spa day with Cristina was fantastic!
                
              </p>
              <p className="sm:text-lg font-semibold mb-4">
                The night programme was amazing too, there are plenty of restaurants in town, with live music and excellent variety of food.
              </p>
              <p className="sm:text-lg font-semibold mb-4">
                Leo and Camilo, you run a 5-star operation! Congratulations and thank you very much for hosting us.
                My husband will never forget his 60th birthday trip to Brazil!&rdquo;

              </p>
              <p className="sm:text-sm text-gray-600">- Sarah K., Non-Fisher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-200 text-gray-800 py-12" id="contact">
        <div className="max-w-4xl mx-auto text-lg">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
            <ContactUs />
        </div>
      </section>
      

      
    </div>
  );
}
