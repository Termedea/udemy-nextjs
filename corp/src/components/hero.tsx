import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

function Hero(props: HeroProps) {
  return (
    <div>
      <div className="absolute -z-10 inset-0">
        <Image src={props.imgData} alt={props.imgAlt} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="pt-48 flex justify-center item-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}

export default Hero;
