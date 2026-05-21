import Card from '@/components/Card';
import HeroImage from '@/components/HeroImage';
import scaleImg from 'public/images/scale.jpg';

export default function ScalePage() {
  return (
    <main className="page">
      <HeroImage alt="Cloud Scale" image={scaleImg} />
      <Card>
        <h2>Scale with us</h2>
        <p>Scale page</p>
      </Card>
    </main>
  );
}
