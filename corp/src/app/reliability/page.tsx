import Card from '@/components/Card';
import HeroImage from '@/components/HeroImage';
import reliabilityImg from 'public/images/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <main className="page">
      <HeroImage alt="Car Factory" image={reliabilityImg} />
      <Card>
        <h2>We're reliable</h2>
        <p>Reliability page</p>
      </Card>
    </main>
  );
}
