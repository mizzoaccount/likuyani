// pages/index.tsx

import Hero from '@/components/Hero';
import Navbart from '@/components/NavBar';
import AbouttSection from '@/components/Aboutt';
import ThematicAreas from '@/components/Thematic';
import NewsBlogSection from '@/components/NewsBlogSection';
import EventsCalendar from '@/components/EventsCalendar';
import GetInvolved from '@/components/GetInvolved';
import DonationSection from '@/components/DonationSection';
import ResourcesSection from '@/components/ResourcesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TopHero from '@/components/TopHero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
     
      <main>
       <Navbart />
       <TopHero />
        <Hero />
        <AbouttSection />
        <ThematicAreas />
        <NewsBlogSection />
        <EventsCalendar />
        <GetInvolved />
        <DonationSection />
        <ResourcesSection />
        <ContactSection />
        <Footer />
      </main>
    
    </div>
  );
}

