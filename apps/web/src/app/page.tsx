import { Hero } from '@/components/sections/hero';
import { FeaturedDishes } from '@/components/sections/featured-dishes';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedDishes />
      <Services />
      <Testimonials />
      <CTASection />
    </div>
  );
}
