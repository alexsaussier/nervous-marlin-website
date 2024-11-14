import Image from 'next/image';
import Beach1 from '@/public/images/activities/beach1.jpg';
import Hero from '@/components/Hero';
import LeoPhoto from '@/public/images/Leo.jpg'
import CamiloPhoto from '@/public/images/Camilo.jpg'
import LeoyCamilo from '@/public/images/LeoyCamilo.jpg'


export default function AboutUs() {
  return (
    <div className="font-sans">
      
      <Hero
        imageSrc={Beach1}
        title="About Us"
        subtitle="Discover the story behind Nervous Marlin Fishing Lodge"
      />

      {/* Owner Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-col">
                <h2 className="text-3xl font-bold mb-4">A Few Words About us</h2>
                  <p className="text-lg mb-6">
                      My name is Leo Foresti, the owner of Nervous Marlin Fishing Lodge.
                      I was born in Sao Paulo, Brazil and raised in Buenos Aires, Argentina. From 2001 until 2020 I lived in Cordoba, a province North of Buenos Aires, Argentina.
                      I was running a successful hunting Lodge (Posta del Norte), partner of Los Chanares. We were also endorsed by Flyways, Orvis (Endorsed International Organization)
                      and Beretta Trident (First International Beretta lodge).
                      In 2017, we received the certificate of excellence by Tripadvisor. 
                  </p>
                 
            </div>
              <div className="py-8">
                <div className="max-w-xl mx-auto">
                  <Image
                    src={LeoPhoto}
                    alt="Leonardo Foresti"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-center italic mt-2">Leonardo Foresti</p>
              </div>
              <p className="text-lg mb-6">
                  In 2020 I decided to make a radical change in my life, and moved to Brazil with my family, to this amazing and beautiful town called Arraial d&apos;Ajuda.
                  With my friend Camilo Escudero, who I know since kindergarden in Buenos Aires, we decided to start a fishing lodge specialized in Blue Marlin fishing, but also for Wahoo, Grouper, Mahi Mahi, Tuna fishing, and the list goes on.
                  Camilo has been living in this area for 24 years, highly involved in the tourism industry and knows perfectly the area.
                  Throughout your stay, you will be hosted and guided by Camilo and myself. We are trilingual, fluent in Spanish, English and Portuguese.
                

              </p>

              <div className="py-8">
                <div className="max-w-lg mx-auto">
                  <Image
                    src={CamiloPhoto}
                    alt="Camilo Escudero"
                    className="rounded-lg shadow-lg object-cover aspect-[16/17] object-top"
                  />
                </div>
                <p className="text-center italic  mt-2">Camilo Escudero</p>
              </div>

              <p className="text-lg mb-4">
                  We provide the same level of high-quality services that I created in Cordoba, and exceptional fishing adventures, here on the Bahian coast.
                  We also provide entertainment and adventure programs for your whole family while you are fishing. 
                  Some of these activities include biking on the beach, boat trips to reefs and different other amazing beaches in the area, with delicious lunches.
                  Everything is included in the daily rate, except for fishing.
              </p> 

              <div className="py-8">
                <div className="max-w-lg mx-auto">
                  <Image
                    src={LeoyCamilo}
                    alt="Camilo and Leo"
                    className="rounded-lg shadow-lg object-cover aspect-[16/17] object-top"
                  />
                </div>
                <p className="text-center italic mt-2">Camilo and Leo</p>
              </div>
              
            </div>
      </section>

      
      
    </div>
  );
}
