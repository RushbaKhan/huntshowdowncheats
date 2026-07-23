import { HeroSection } from '../components/HeroSection';
import { SafetySection } from '../components/SafetySection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Integrations } from '../components/Integrations';
import { Testimonials } from '../components/Testimonials';
import { HomeFaqSection } from '../components/HomeFaqSection';
import { SupportBanner } from '../components/SupportBanner';

export function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <SafetySection />
      <FeaturesGrid />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <HomeFaqSection />
      <SupportBanner />
    </main>
  );
}
