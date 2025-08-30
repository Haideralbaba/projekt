import { Header } from '@/components/layout/header';
import { FeaturedSection } from '@/components/home/featured-section';
import { HeroSection } from '@/components/home/hero-section';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
      </main>
    </div>
  );
}

export default App;