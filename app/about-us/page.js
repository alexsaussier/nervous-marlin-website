import Image from 'next/image';
import Beach1 from '@/public/images/activities/beach1.jpg';
import Hero from '@/components/Hero';
import LeoPhoto from '@/public/images/Leo.jpg'
import CamiloPhoto from '@/public/images/Camilo.jpg'


export default function AboutUs() {
  return (
    <div className="font-sans">
      
      <Hero
        imageSrc={Beach1}
        title="About Us"
        subtitle="Discover the story behind Nervous Marlin Fishing Lodge"
      />

      {/* Owner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={LeoPhoto}
                alt="Leonardo Foresti"
                width={600}
                className="rounded-lg shadow-lg mb-4"
              />
              <p className="text-center italic text-gray-700 mb-4">Leonardo Foresti</p>
              <div className="md:w-1/2 w-[600px] h-[400px] relative mb-4">
                <Image
                  src={CamiloPhoto}
                  alt="Camilo Escudero"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <p className=" italic text-gray-700 mb-4">Camilo Escudero</p>


            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About us</h2>
                <p className="text-lg mb-4">
                    My name is Leo Foresti, the owner of Nervous Marlin Fishing Lodge.
                    I was born in Sao Paulo, Brazil and raised in Buenos Aires, Argentina. From 2001 until 2020 I lived in Cordoba, a province north of Buenos Aires, Argentina.
                    I was running a successful hunting Lodge (Posta del Norte), partner of Los Chanares and endorsed by Flyways and Orvis & Beretta.
                    In 2017, we received the certificate of excellence by Tripadvisor. 
                </p>
                <p className="text-lg mb-4">
                    In 2020 I decided to make a radical change in my life, and moved to Brazil with my family, to this amazing and beautiful town called Arraial d&apos;Ajuda.
                    With my friend Camilo Escudero, who I know since kindergarden in Buenos Aires, we decided to start a fishing lodge specialized in Blue Marlin fishing (but also for Wahoo, Mahi Mahi and Tuna fishing).
                    Camilo has been living in this area for 24 years, highly involved in the tourism industry and knows perfectly the area. 
                </p>    
                <p className="text-lg mb-4">
                    We provide the same level of high-quality services that we created in Cordoba, and exceptional fishing adventures, here on the Bahian coast.
                    We also provide entertainment and adventure programs for your whole family while you are fishing. 
                    Some of these activities include biking on the beach, boat trips to reefs and different other amazing beaches in the area, with delicious lunches. 
                </p>    
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}
