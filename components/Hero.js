import Image from 'next/image';
import logoBlack from '../public/assets/logoBlack.png';
import logoWhite from '../public/assets/logoWhite.png';

export default function HeroSection({ imageSrc, title, subtitle, objectPosition = "top" }) {
  return (
    <section className="relative h-[60vh]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        placeholder="blur"
        className=""
        style={{ objectFit: "cover", objectPosition }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col py-20 items-center text-white text-center px-4">
      <div className="pb-8">
            <Image
              src={logoWhite}
              alt="Nervous Marlin Logo"
              className="object-contain w-[250px] md:w-[250px]"
            />
          </div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
