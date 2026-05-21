import Card from '@/components/Card';
import HeroImage from '@/components/HeroImage';
import performanceImg from 'public/images/performance.jpg';

export default function PerformancePage() {
  return (
    <main className="page">
      <HeroImage alt="Cloud Performance" image={performanceImg} />
      <Card>
        <h2>Cloud Performance</h2>
        <p>Performance page</p>
      </Card>
    </main>
  );
}
