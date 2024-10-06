import Image from 'next/image';
import Pitinga from '@/public/images/activities/beach1.jpg';

export default function AboutUs() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={Pitinga}
          alt="Bahia Coast"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Discover the story behind Nervous Marlin Fishing Lodge</p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/leonardo-foresti.jpg"
                alt="Leonardo Foresti"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About me</h2>
                <p className="text-lg mb-4">
                    My name is Leo Foresti, the owner of Nervous Marlin Fishing Lodge.
                    I was born in Sao Paulo, Brazil and raised in Buenos Aires, Argentina. From 2001 until 2020 I lived in Cordoba, a province north of Buenos Aires, Argentina.
                    I was running a successful hunting Lodge (Posta del Norte), partner of Los Chanares and endorsed by Flyways and Orvis & Beretta.
                    In 2017, we received the certificate of excellence by Tripadvisor. 
                </p>
                <p className="text-lg mb-4">
                    In 2020 I decided to make a radical change in my life, and moved to Brazil with my family, to this amazing and beautiful town call Arraial d&apos;Ajuda.
                    With my friend Camilo, who I know since kindergarden, we decided to start a fishing lodge specialized in Blue Marlin fishing (but also for Wahoo, Mahi Mahi and Tuna fishing).
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

      {/* Section about Porto Seguro */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Porto Seguro and the Discovery Coast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">The area of Porto Seguro</h3>
              <p className="text-lg mb-4">
                Porto Seguro, located in the northeastern state of Bahia, is the heart of Brazil&apos;s &quot;Discovery Coast&quot;. 
                It is a 1h and 45min flight from Sao Paulo. 
                This historic region is where Pedro Álvares Cabral first landed in 1500, marking the beginning of Brazil&apos;s recorded history.
              </p>
              <p className="text-lg mb-4">
                The area is rich in cultural heritage, with many buildings from the colonial era still standing and protected by UNESCO. 
                Some houses are still occupied by descendants of the original families, while others have been transformed into high-quality restaurants, stores, and small hotels.
              </p>

              <h3 className="text-xl font-bold mb-4">Arraial d&apos;Ajuda</h3>
              <p className="text-lg mb-4">
                Our fishing lodge is located just across the Buranheim River, in the town of Arraial d&apos;Ajuda. 
                It is a charming town that gained popularity among Europeans and Argentinians in the 1970s. 
                
                Originally a fishing village, it has grown into one of Brazil&apos;s most enchanting destinations, 
                boasting pristine beaches, world-class hospitality, and award-winning cuisine. It also has the third oldest church in Brazil.
                The waters are home to the first marine sanctuary in Brazil, the Royal Charlotte Bank, with the biggest varsity of coral and marine fauna.
              </p>

              <h3 className="text-xl font-bold mb-4">Security</h3>
              <p className="text-lg mb-4">
                Arraial d&apos;Ajuda is a small town with a population of about 40,000 people. It is a safe area, with a low crime rate. 
                Its growing popularity amonngst tourists makes it a peaceful and family-friendly destination.
              </p>
            </div>
            <div>
              <Image
                src={Pitinga}
                alt="Porto Seguro"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
