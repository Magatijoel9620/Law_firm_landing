
import AttorneyProfiles from '@/components/sections/attorney-profiles';
import Contact from '@/components/sections/contact';
import FirmHistory from '@/components/sections/firm-history';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import PracticeAreas from '@/components/sections/practice-areas';
import Stats from '@/components/sections/stats';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="space-y-16 sm:space-y-24">
            <FirmHistory />
            <PracticeAreas />
            <Stats />
            <AttorneyProfiles />
            <Partners />
            <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
