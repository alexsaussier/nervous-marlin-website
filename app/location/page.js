'use client'
import Image from 'next/image';
import Hero from '@/components/Hero';
import Beach3 from '@/public/images/activities/beach3.jpg';
import Beach1 from '@/public/images/activities/beach1.jpg';
import RoyalCharlotteBank from '../../public/images/fishing/royalCharlotteBank.jpg'; 
import PhotoGallery from '@/components/PhotoGallery';
//import Arraial1 from '../../public/images/downtown/arraial1.jpg';
//import Arraial2 from '../../public/images/downtown/arraial2.jpg';
//import Arraial3 from '../../public/images/downtown/arraial3.jpg';
import Arraial6 from '../../public/images/downtown/arraial6.jpg';
import Arraial8 from '../../public/images/downtown/arraial8.jpg';
import Arraial9 from '../../public/images/downtown/arraial9.jpg';



const locationPhotos = [
  { src: '/images/downtown/arraial1.jpg', alt: "Arraial 1" },
  { src: '/images/downtown/arraial2.jpg', alt: "Arraial 2" },
  { src: '/images/downtown/arraial3.jpg', alt: "Arraial 3" },
  { src: '/images/downtown/arraial6.jpg', alt: "Arraial 6" },
  { src: '/images/downtown/arraial8.jpg', alt: "Arraial 8" },
  { src: '/images/downtown/arraial9.jpg', alt: "Arraial 9" }
  // Add more photos as needed
];

export default function Location() {
  return (
    <div className="font-sans">
      
      <Hero
        imageSrc={Beach3}
        title="Our Location"
        subtitle="Discover the beauty of Arraial d&apos;Ajuda and surrounding areas"
        objectPosition="center"
      />


      {/* Section about Porto Seguro */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Porto Seguro and the Discovery Coast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">The area of Porto Seguro</h3>
              <p className="text-lg mb-4">
                Porto Seguro, located in the northeastern state of Bahia, is a 1h and 45min flight from Sao Paulo 
                (If you are coming from the U.S.A., you will likely need to take a connecting flight in Sao Paulo).
                It is right in the heart of Brazil&apos;s &quot;Discovery Coast&quot;. 
                This historic region is where Pedro Álvares Cabral first landed in 1500, marking the beginning of Brazil&apos;s recorded history.
              </p>
              <p className="text-lg mb-4">
                The area is rich in cultural heritage, with many buildings from the colonial era still standing and protected by UNESCO. 
                Some houses are still occupied by descendants of the original families, while others have been transformed into high-quality restaurants, stores, and small hotels.
              </p>

              <h3 className="text-xl font-bold mb-4">Getting There - Arraial d&apos;Ajuda</h3>
              <p className="text-lg mb-4">
                Our fishing lodge is located just across the Buranheim River, in the town of Arraial d&apos;Ajuda. 
                It is a charming town that gained popularity among Europeans and Argentinians in the 1970s.
                The location is easily accessible from the Porto Seguro Airport (BPS), a 40-minute drive away, where you will enjoy crossing the Burenheim river on a ferry.

              </p>

              <p className="text-lg mb-4">
                Originally a fishing village, it has grown into one of Brazil&apos;s most enchanting destinations, 
                boasting pristine beaches, world-class hospitality, and award-winning cuisine. It also has the third oldest church in Brazil.
                The waters are home to the first marine sanctuary in Brazil, the Royal Charlotte Bank, with the biggest varsity of coral and marine fauna.
              </p>

              <h3 className="text-xl font-bold mb-4">Security</h3>
              <p className="text-lg mb-4">
                Arraial d&apos;Ajuda is a small town with a population of about 40,000 people. It is a safe area, with a low crime rate. 
                Its growing popularity amonngst tourists makes it a peaceful and family-friendly destination.
              </p>

              <h3 className="text-xl font-bold mb-4">Visa</h3>
              <p className="text-lg mb-4">
                In 2025, Brazil will require a visa for all US citizens. For any visa enquiries and procedures, we recommend checking on <a href="https://www.ivisa.com" target="_blank" rel="noopener noreferrer" className="font-bold underline">iVisa.com</a>.
              </p>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30803.076171462223!2d-39.14942655!3d-16.49005695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73696d7c2b9bc75%3A0x7f4859a199d0c961!2sArraial%20d&#39;Ajuda%2C%20Porto%20Seguro%20-%20BA%2C%20Brazil!5e0!3m2!1sen!2sus!4v1653925234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      


      {/* Surrounding Areas Section */}
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
              <p className="text-lg mb-4">
                The Royal Charlotte Bank is a remarkable underwater ecosystem discovered in 2023 by a Petrobras program. 
                It is the largest coral bank in Brazil, boasting an incredible diversity of marine life. 
                This vast underwater formation stretches for 65 miles and plunges to depths of 9,500 feet (3,000 meters).
                
              </p>

              <p className="text-lg mb-4">
                Because of its spectacular geography, we have marlin fishing all year round, weather permitting.
                The best season however is from October to March.
              </p>

              <p className="text-lg mb-4">
                The fishing records from over the years show the high season can start late September with
                lots of white marlin and blue marlin showing up. October has raised the most marlin
                over the years with December second and November third.

              </p>

              <p className="text-lg mb-4">
                Varieties of fish you can catch include amberjack, bigeye and yellowfin tuna, trevally,
                red snapper, grouper, yellowtail snapper and the list go on.
              </p>

              
            </div>
            
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
          <PhotoGallery photos={locationPhotos} />
        </div>
      </section>

      
      
    </div>
  );
}
