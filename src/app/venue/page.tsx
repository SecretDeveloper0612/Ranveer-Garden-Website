import VenueShowcase from '@/components/sections/VenueShowcase';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import styles from './page.module.css';

export const metadata = {
  title: 'Banquet Hall & Venue | Ranveer Garden',
  description: 'Discover our 7,500 sq. ft. pillar-less banquet hall, perfectly designed for grand weddings and corporate events in Haldwani.',
};

export default function VenuePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1>The Venue</h1>
          <p>A canvas for your grandest celebrations.</p>
        </div>
      </section>

      <VenueShowcase />
      
      <FeaturesGrid />

      <section className={`section ${styles.detailsSection}`}>
         <div className="container text-center">
            <h2 className="section-title">Ready to secure your date?</h2>
            <p className="section-subtitle">Our prime dates book up quickly. Get in touch with our event specialists to check availability.</p>
            <a href="/contact" className="btn-primary">Check Availability</a>
         </div>
      </section>
    </main>
  );
}
