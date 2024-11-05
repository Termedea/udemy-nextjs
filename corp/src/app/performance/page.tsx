import Hero from '@/components/hero';
import performanceImage from 'public/images/performance.jpg';

function PerformancePage() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="Car factory"
      title="Professional Cloud Hosting"></Hero>
  );
}

export default PerformancePage;
