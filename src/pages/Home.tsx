import { HeroSection } from '../components/HeroSection';
import { SafetySection } from '../components/SafetySection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Integrations } from '../components/Integrations';
import { Testimonials } from '../components/Testimonials';
import { SupportBanner } from '../components/SupportBanner';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SafetySection />
      <FeaturesGrid />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <SupportBanner />
    </>
  );
}
