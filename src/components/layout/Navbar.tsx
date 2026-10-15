'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { contact } from '@/data/contact';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLightHeader = pathname === '/contact' || pathname.startsWith('/rooms/');

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
            <Image 
              src="/Images/logo2.png" 
              alt="Ranveer Garden Resort Logo" 
              width={70} 
              height={70} 
              style={{ objectFit: 'contain', margin: '-15px 0' }} 
            />
          </div>
          <div className={styles.logoText}>
            <span>RANVEER</span>
            <small>THE GARDEN RESORT</small>
          </div>
        </Link>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          {[
            { href: '/', label: 'DISCOVER', isActive: (p: string) => p === '/' },
            { href: '/rooms', label: 'ROOMS', isActive: (p: string) => p === '/rooms' || p.startsWith('/rooms/') },
            { href: '/events', label: 'EVENTS & WEDDINGS', isActive: (p: string) => p === '/events' || p.startsWith('/events/') },
            { href: '/gallery', label: 'GALLERY', isActive: (p: string) => p === '/gallery' || p.startsWith('/gallery/') },
            { href: '/contact', label: 'CONTACT', isActive: (p: string) => p === '/contact' || p.startsWith('/contact/') },
          ].map((item) => {
            const active = item.isActive(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? styles.active : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.navActions}>
          <div className={styles.contactInfo}>
            <span>CALL US</span>
            <a href={`tel:${contact.bookingPhone}`}>{contact.bookingPhone}</a>
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
