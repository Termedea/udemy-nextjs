import Card from '@/components/Card';
import HeroImage from '@/components/HeroImage';
import homeImg from 'public/images/home.jpg';

export default function Home() {
  return (
    <main className="page">
      <HeroImage alt="Welding" image={homeImg} />
      <Card>
        <h2>Professional Cloud Hosting</h2>
      </Card>
    </main>
  );
}
