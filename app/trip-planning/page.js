import Head from 'next/head';

export default function TripPlanning() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8 pt-24">
        <Head>
          <title>Trip Planning - Nervous Marlin Fishing Lodge</title>
          <meta name="description" content="Guide for American customers on how to get to Arraial de Ajuda, Brazil" />
        </Head>

        <h1 className="text-3xl font-bold mb-6">Trip Planning: Arraial de Ajuda, Brazil</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting to Arraial de Ajuda</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Fly to São Paulo-Guarulhos International Airport (GRU) or Rio de Janeiro-Galeão International Airport (GIG) in Brazil.</li>
            <li>Take a connecting flight to Porto Seguro Airport (BPS), the closest airport to Arraial de Ajuda.</li>
            <li>From Porto Seguro Airport, our team will arrange a private transfer to the lodge.</li>
            
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensure your passport is valid for at least six months beyond your planned stay.</li>
            <li>Check if you need a visa to enter Brazil. Many US citizens can enter for tourism without a visa for stays up to 90 days.</li>
            <li>Consider travel insurance that covers medical emergencies and trip cancellations.</li>
            <li>Learn a few basic Portuguese phrases to help you communicate with locals.</li>
            <li>Bring appropriate clothing for warm weather and beach activities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you need any assistance with your travel plans, please don&apos;t hesitate to contact us:</p>
          <p className="mt-2">
            <strong>Email:</strong> info@nervousmarlin.com<br />
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  );
}
