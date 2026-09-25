import Link from 'next/link';
import { contact } from '@/data/contact';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMark}>R</div>
              <div className={styles.logoText}>
                <span>RANVEER</span>
                <small>THE GARDEN RESORT & BANQUET</small>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Your premium destination for monumental celebrations and exquisite memories in the heart of Uttarakhand.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>The Venue</h4>
            <Link href="/about">Our Story</Link>
            <Link href="/venue">Banquet Hall</Link>
            <Link href="/rooms">Accommodation</Link>
            <Link href="/dining">Dining</Link>
            <Link href="/gallery">Gallery</Link>
          </div>

          <div className={styles.contactCol}>
            <h4>Hospitality & Bookings</h4>
            <p>{contact.address.full}</p>
            <p className={styles.phone}><a href={`tel:${contact.directorPhone}`}>{contact.directorPhone}</a></p>
            <p className={styles.phone}><a href={`tel:${contact.managerPhone}`}>{contact.managerPhone}</a></p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <Link href="/plan-your-event" className={styles.ctaLink}>PLAN YOUR EVENT &rarr;</Link>
          </div>
        </div>
        
        {/* Giant background text */}
        <div className={styles.watermark}>
          RANVEER
        </div>

        <div className={styles.bottomSection}>
          <p>&copy; {currentYear} Ranveer The Garden Resort & Banquet. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
