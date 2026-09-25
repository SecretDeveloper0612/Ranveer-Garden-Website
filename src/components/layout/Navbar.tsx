'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contact } from '@/data/contact';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLightHeader = pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isLightHeader && !scrolled ? styles.lightHeader : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}>
            {/* Using a simple text logo representing the mark in the mockup */}
            <span style={{color: 'var(--color-champagne)'}}>R</span>
          </div>
          <div className={styles.logoText}>
            <span>RANVEER</span>
            <small>THE GARDEN RESORT & BANQUET</small>
          </div>
        </Link>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link href="/">DISCOVER</Link>
          <Link href="/rooms">ROOMS</Link>
          <Link href="/events">EVENTS & WEDDINGS</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        <div className={styles.navActions}>
          <div className={styles.contactInfo}>
            <span>CALL US</span>
            <a href={`tel:${contact.directorPhone}`}>{contact.directorPhone}</a>
          </div>
          <Link href="/plan-your-event" className={`btn-primary ${styles.planBtn}`}>
            PLAN YOUR EVENT
          </Link>
          
          <button 
            className={styles.hamburger} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={mobileMenuOpen ? styles.open : ''}></span>
            <span className={mobileMenuOpen ? styles.open : ''}></span>
            <span className={mobileMenuOpen ? styles.open : ''}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
