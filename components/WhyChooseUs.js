import MarlinPhoto from '../public/images/marlin-photo.jpg';

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-gray-200 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reason cards */}
          <ReasonCard
            title="World-class Blue Marlin Fishing"
            description="Experience the thrill of catching majestic Blue Marlins in one of the world&apos;s premier fishing destinations."
          />
          <ReasonCard
            title="Diverse Activities"
            description="From spa treatments to beach excursions, we offer a wide range of activities for both anglers and non-fishing guests."
          />
          <ReasonCard
            title="Expert Guides and Staff"
            description="Our experienced team ensures you have the best possible fishing experience, with knowledge passed down through generations."
          />
          <ReasonCard
            title="Luxurious Accommodations"
            description="Relax in comfort with our top-notch lodging facilities, designed to provide the perfect retreat after a day on the water."
          />
          <ReasonCard
            title="Unforgettable Culinary Experiences"
            description="Savor exquisite local and international cuisine in the best locations of the area."
          />
          <ReasonCard
            title="Breathtaking Location"
            description="Immerse yourself in the stunning beauty of Brazil&apos;s coastline, with pristine beaches and crystal-clear waters."
          />
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg  border-2 hover:shadow-2xl duration-500">
      <h3 className="text-2xl font-semibold mb-4 text-sky-900 ">{title}</h3>
      <p className="text-lg text-black">{description}</p>
    </div>
  );
}
