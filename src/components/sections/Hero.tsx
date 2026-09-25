import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>A PREMIER DESTINATION, HALDWANI UTTARAKHAND</span>
        </div>
        <h1 className={styles.title}>Where Moments Become Memories.</h1>
        <p className={styles.subtitle}>
          A place where the grandeur of celebrations meets the romance of nature. 
          Discover the magic of Ranveer The Garden Resort & Banquet.
        </p>
        
        <div className={styles.actions}>
          <Link href="/plan-your-event" className={`btn-primary ${styles.primaryBtn}`}>
            PLAN YOUR EVENT
          </Link>
          <Link href="/venue" className={`btn-outline ${styles.outlineBtn}`}>
            EXPLORE THE VENUE
          </Link>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>SCROLL DOWNWARDS</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
