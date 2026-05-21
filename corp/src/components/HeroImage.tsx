import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
  alt: string;
  image: StaticImageData;
}

export default function HeroImage({ alt, image }: HeroProps) {
  return (
    <div>
      <div className="absolute -z-10 inset-0">
        <Image fill className="object-cover" src={image} alt={alt} />
      </div>
    </div>
  );
}
