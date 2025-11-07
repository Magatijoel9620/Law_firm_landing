import AttorneyProfiles from '@/components/sections/attorney-profiles';
import Contact from '@/components/sections/contact';
import FirmHistory from '@/components/sections/firm-history';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import PracticeAreas from '@/components/sections/practice-areas';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PracticeAreas />
        <FirmHistory />
        <AttorneyProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
