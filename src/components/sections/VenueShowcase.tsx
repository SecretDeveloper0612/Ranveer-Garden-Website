import Image from 'next/image';
import Link from 'next/link';

import styles from './VenueShowcase.module.css';

export default function VenueShowcase() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.imageColumn}>
          <div className={styles.mainImage}>
            <Image 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
              alt="Venue main" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.overlayImage}>
            <Image 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" 
              alt="Venue detail" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.imageCaption}>
            <p>Every detail curated for elegance.</p>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <span className={styles.eyebrow}>RANVEER GARDEN BANQUET</span>
          <h2 className={styles.title}>Your story deserves a beautiful setting.</h2>
          
          <p className={styles.text}>
            Our dedicated team will help you create a customized wedding experience that reflects your unique style and vision. From breathtaking decor to exceptional catering, we ensure every detail is flawless.
          </p>

          <ul className={styles.list}>
            <li>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <h4>Pillar-less Hall & 7,500 sq. ft. Accommodation</h4>
                <p>Spacious enough to host grand celebrations comfortably.</p>
              </div>
            </li>
            <li>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <h4>24/7 Valet Parking & Security</h4>
                <p>Ensuring convenience and safety for all your distinguished guests.</p>
              </div>
            </li>
            <li>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <h4>Custom Catering & Multi-Cuisine Menu</h4>
                <p>A culinary journey tailored specifically to your taste preferences.</p>
              </div>
            </li>
          </ul>

          <Link href="/plan-your-event" className={`btn-primary ${styles.btn}`}>
            PLAN YOUR EVENT
          </Link>
        </div>

      </div>
    </section>
  );
}
