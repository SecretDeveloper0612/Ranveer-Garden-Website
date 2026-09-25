import LeadForm from '@/components/sections/LeadForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Plan Your Event | Ranveer Garden',
  description: 'Inquire now to plan your monumental event at Ranveer Garden Resort & Banquet.',
};

export default function PlanEventPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1>Plan Your Event</h1>
          <p>Your unforgettable celebration starts here.</p>
        </div>
      </section>

      <div className={styles.formSection}>
        <LeadForm />
      </div>
    </main>
  );
}
