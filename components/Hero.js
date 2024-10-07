import Image from 'next/image';

export default function HeroSection({ imageSrc, title, subtitle, objectPosition = "top" }) {
  return (
    <section className="relative h-[60vh]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        style={{ objectFit: "cover", objectPosition }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
