'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Metrics.module.css';

function Counter({ end, suffix = '', duration = 2000 }: { end: number | string, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  const isNumber = typeof end === 'number';

  useEffect(() => {
    if (!isNumber) return;
    
    let observer: IntersectionObserver;
    let animationFrame: number;
    let startTime: number | null = null;

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOut * (end as number)));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(startAnimation);
      } else {
        setCount(end as number);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = window.requestAnimationFrame(startAnimation);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isNumber]);

  if (!isNumber) {
    return <h3 className={styles.value}>{end}{suffix}</h3>;
  }

  return (
    <h3 ref={nodeRef} className={styles.value}>
      {count.toLocaleString()}{suffix}
    </h3>
  );
}

export default function Metrics() {
  const metrics = [
    { value: 7500, suffix: '', label: 'SQ. FT', sub: 'BANQUET HALL AREA' },
    { value: 800, suffix: '+', label: 'GUESTS', sub: 'FLEXIBLE SEATING CAPACITY' },
    { value: 100, suffix: '%', label: 'PILLAR-LESS', sub: 'UNOBSTRUCTED VIEWING' },
    { value: 'FULLY', suffix: ' A/C', label: '', sub: 'COMPLETE CLIMATE CONTROL' },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>THE BANQUET HALL</span>
          <h2 className={styles.title}>Designed for grand occasions.</h2>
          <p className={styles.subtitle}>
            A venue that effortlessly balances sweeping scale with an intimate feel, perfectly suited for the grandest of Indian weddings.
          </p>
        </div>

        <div className={styles.grid}>
          {metrics.map((m, i) => (
            <div key={i} className={styles.card}>
              <Counter end={m.value} suffix={m.suffix} />
              {m.label && <span className={styles.label}>{m.label}</span>}
              <div className={styles.line}></div>
              <span className={styles.sub}>{m.sub}</span>
            </div>
          ))}
        </div>

        <div className={styles.banner}>
          <div className={styles.image}>
            <Image 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
              alt="Banquet overview" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.bannerContent}>
            <h3>What makes us stand out</h3>
            <p>Our grand pillar-less architecture allows an unobstructed view for all your guests.</p>
            <ul className={styles.bannerList}>
              <li>Huge open spaces for massive gatherings</li>
              <li>Elegant interiors ready for decoration</li>
              <li>Superior acoustic control</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
