import GalleryMasonry from '@/components/sections/GalleryMasonry';
import styles from './page.module.css';

export const metadata = {
  title: 'Dining & Catering | Ranveer Garden',
  description: 'Experience our multi-cuisine dining options and exquisite catering services for your events.',
};

export default function DiningPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1>Dining & Catering</h1>
          <p>A culinary journey that delights the senses.</p>
        </div>
      </section>

      <GalleryMasonry />

      <section className={`section ${styles.cuisineSection}`}>
        <div className="container">
          <div className={styles.header}>
             <h2 className="section-title">Our Culinary Offerings</h2>
             <p className="section-subtitle">We offer a wide array of cuisines to cater to your specific taste and event requirements. Our expert chefs ensure every dish is a masterpiece.</p>
          </div>

          <div className={styles.cuisineGrid}>
             <div className={styles.cuisineCard}>
                <h3>Authentic Indian</h3>
                <p>From rich North Indian curries to delicate South Indian specialties, experience the true flavors of India.</p>
             </div>
             <div className={styles.cuisineCard}>
                <h3>Continental</h3>
                <p>Elegant European dishes prepared with the finest ingredients for a sophisticated dining experience.</p>
             </div>
             <div className={styles.cuisineCard}>
                <h3>Pan-Asian</h3>
                <p>A delectable selection of Chinese, Thai, and Japanese dishes that bring the vibrant tastes of Asia to your plate.</p>
             </div>
             <div className={styles.cuisineCard}>
                <h3>Live Counters</h3>
                <p>Interactive food stations offering chaats, pastas, and desserts, prepared fresh in front of your guests.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
