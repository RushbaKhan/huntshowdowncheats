import { AnimatedSection } from './AnimatedSection';
import { FaqSection } from './FaqSection';
import { HOME_FAQ_ITEMS } from '../config/seo';

export function HomeFaqSection() {
  return (
    <AnimatedSection>
      <FaqSection
        id="faq"
        title="Hunt Showdown Cheats FAQ"
        subtitle="Answers about undetected Hunt Showdown aimbot, ESP, wallhack, triggerbot, radar and DMA."
        items={HOME_FAQ_ITEMS}
      />
    </AnimatedSection>
  );
}
