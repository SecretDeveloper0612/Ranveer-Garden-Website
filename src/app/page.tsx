import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import EventTypes from '@/components/sections/EventTypes';
import VenueShowcase from '@/components/sections/VenueShowcase';
import Metrics from '@/components/sections/Metrics';
import Accommodation from '@/components/sections/Accommodation';
import GalleryMasonry from '@/components/sections/GalleryMasonry';
import GalleryFilter from '@/components/sections/GalleryFilter';
import Testimonial from '@/components/sections/Testimonial';
import LeadForm from '@/components/sections/LeadForm';
import Location from '@/components/sections/Location';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection><Introduction /></AnimatedSection>
      <AnimatedSection><FeaturesGrid /></AnimatedSection>
      <AnimatedSection><EventTypes /></AnimatedSection>
      <AnimatedSection><VenueShowcase /></AnimatedSection>
      <AnimatedSection><Metrics /></AnimatedSection>
      <AnimatedSection><Accommodation /></AnimatedSection>
      <AnimatedSection><GalleryMasonry /></AnimatedSection>
      <AnimatedSection><GalleryFilter /></AnimatedSection>
      <AnimatedSection><Testimonial /></AnimatedSection>
      <AnimatedSection><LeadForm /></AnimatedSection>
      <AnimatedSection><Location /></AnimatedSection>
    </main>
  );
}
