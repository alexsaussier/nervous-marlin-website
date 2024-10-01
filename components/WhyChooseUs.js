export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reason cards */}
          <ReasonCard
            title="World-class Blue Marlin Fishing"
            description="Experience the thrill of catching majestic Blue Marlins in one of the world&apos;s premier fishing destinations."
          />
          <ReasonCard
            title="Luxurious Accommodations"
            description="Relax in comfort with our top-notch lodging facilities, designed to provide the perfect retreat after a day on the water."
          />
          <ReasonCard
            title="Expert Guides and Staff"
            description="Our experienced team ensures you have the best possible fishing experience, with knowledge passed down through generations."
          />
          <ReasonCard
            title="Unforgettable Culinary Experiences"
            description="Savor exquisite local and international cuisine prepared by our skilled chefs using the freshest ingredients."
          />
          <ReasonCard
            title="Diverse Activities"
            description="From spa treatments to beach excursions, we offer a wide range of activities for both anglers and non-fishing guests."
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
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-4 text-red-400">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
