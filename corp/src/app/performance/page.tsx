import Hero from '@/components/hero';
import performanceImage from 'public/images/performance.jpg';

function PerformancePage() {
  return <Hero imgData={performanceImage} imgAlt="Welding" title="We server high performance applicaitons"></Hero>;
}

export default PerformancePage;
