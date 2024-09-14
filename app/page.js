import Image from "next/image";
import marlinPhoto from '../public/images/marlin-photo.jpg';
import ContactUs from '@/components/ContactUs';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={marlinPhoto}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Incredible Blue Marlin Fishing</h1>
          <p className="text-xl mb-8">Discover the world-renowned fishing coast of Brazil</p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300">
              Contact Us
            </a>
            <a href="#book" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Blue Marlin Fishing Section */}
      <section id="blue-marlin-fishing" className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Blue Marlin Fishing on the coast of Bahia</h2>
          <p className="text-xl mb-8">Experience the thrill of catching the majestic Blue Marlin in the waters of Bahia, Brazil. Our expert guides and state-of-the-art equipment ensure a memorable fishing adventure.</p>
          <div className="flex flex-col items-center">
            <Image
              src="/blue-marlin-fishing.jpg"
              alt="Blue Marlin Fishing"
              width={500}
              height={300}
              objectFit="cover"
              className="mb-8"
            />
            <p className="text-lg">Our fishing excursions cater to both beginners and experienced anglers, offering a unique opportunity to catch this iconic species in its natural habitat.</p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Paraglider</h3>
              <p>Experience the thrill of paragliding over the beautiful landscapes of the Bahian coast</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Private excursions</h3>
              <p>Boat excursions and lunch to untouched, preserved beaches and exploration of the coral reefs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Beach bicycles</h3>
              <p>Explore the Bahian beaches on our beach bicycles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Spa</h3>
              <p>Relax and rejuvenate at our luxurious spa</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Diving</h3>
              <p>Experience the underwater world of the Bahian coast with our diving activities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Nighttime activities</h3>
              <p>Private transfers to the best local restaurants and bars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add testimonial cards here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-4">&ldquo;As an experienced fisherman, I was blown away by the quality of the fishing gear and the expertise of the guides. The Blue Marlin fishing experience was truly unforgettable!&rdquo;</p>
            <p className="text-sm text-gray-600">- John D., Experienced Fisher</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-4">&ldquo;I&apos;ve never fished before, but the guides made me feel so comfortable and taught me everything I needed to know. I caught my first fish and it was exhilarating!&rdquo;</p>
            <p className="text-sm text-gray-600">- Emily G., Non-Experienced Fisher</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-4">&ldquo;I&apos;m not a fisher, but I loved the variety of activities available. The spa day was amazing and the nighttime activities were so much fun!&rdquo;</p>
            <p className="text-sm text-gray-600">- Sarah K., Non-Fisher</p>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      
    </div>
  );
}
