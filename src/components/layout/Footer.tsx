import Link from 'next/link';
import Image from 'next/image';
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
              <div className={styles.logoMark}>
                <Image 
                  src="/Images/logo2.png" 
                  alt="Ranveer Garden Resort Logo" 
                  width={40} 
                  height={40} 
                  style={{ objectFit: 'contain' }} 
                />
              </div>
              <div className={styles.logoText}>
                <span>RANVEER</span>
                <small>THE GARDEN RESORT</small>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Your premium destination for monumental celebrations and exquisite memories in the heart of Uttarakhand.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/ranveerthegardenresort/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
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
          <span>Ranveer The Garden Resort &nbsp;&nbsp;&nbsp;</span>
          <span>Ranveer The Garden Resort &nbsp;&nbsp;&nbsp;</span>
          <span>Ranveer The Garden Resort &nbsp;&nbsp;&nbsp;</span>
          <span>Ranveer The Garden Resort &nbsp;&nbsp;&nbsp;</span>
        </div>

        <div className={styles.bottomSection}>
          <p>&copy; {currentYear} Ranveer The Garden Resort. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
