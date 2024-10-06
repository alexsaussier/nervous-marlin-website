import Image from "next/image";
import ContactUs from '@/components/ContactUs';
import MarlinPhoto from '../../public/images/marlin-photo.jpg';


export default function Location() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={MarlinPhoto}
          alt="Blue Marlin Fishing"
          layout="fill"
          objectFit="cover"
          objectPosition="center 60%"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 italic">Discover one of the best Blue Marlin fishing spots in the world</h1>
          <p className="text-xl mb-8">Experience the pristine waters of <b>Bahia, Brazil</b></p>
        </div>
      </section>

      

      {/* Fishing Spot Description */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">The Ultimate Blue Marlin Fishing Destination</h2>
          <div className="max-w-4xl mx-auto text-lg">
            <p className="mb-4">
              The coast of Bahia, Brazil, is renowned for its exceptional Blue Marlin fishing conditions. With warm, crystal-clear waters and abundant marine life, this region offers anglers an unparalleled opportunity to catch the majestic Blue Marlin.
            </p>
            <p className="mb-4">
              Our prime fishing grounds are located just off the coast of Arraial d&apos;Ajuda on the Royal Charlotte Bank, where the continental shelf drops off rapidly, creating the perfect habitat for Blue Marlins and other pelagic species.
            </p>
            <p>
              Whether you are a seasoned angler or a novice fisherman, our expert guides and top-of-the-line equipment ensure an unforgettable fishing experience in one of the world&apos;s best Blue Marlin hotspots.
            </p>
          </div>
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
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '40%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30803.076171462223!2d-39.14942655!3d-16.49005695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73696d7c2b9bc75%3A0x7f4859a199d0c961!2sArraial%20d&#39;Ajuda%2C%20Porto%20Seguro%20-%20BA%2C%20Brazil!5e0!3m2!1sen!2sus!4v1653925234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      

      <section className="bg-gray-100">
        <div className="max-w-4xl mx-auto text-lg">        
            <ContactUs />
        </div>
      </section>
    </div>
  );
}
