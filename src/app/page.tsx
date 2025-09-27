import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import ProgramsServicesSection from '@/components/landing/programs-services-section';
import StudentShowcase from '@/components/landing/student-showcase';
import CtaSection from '@/components/landing/cta-section';
import StatsSection from '@/components/landing/stats-section';
import NewsletterSection from '@/components/landing/newsletter-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <CoreValuesSection />
        <ProgramsServicesSection />
        <StudentShowcase />
        <CtaSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
