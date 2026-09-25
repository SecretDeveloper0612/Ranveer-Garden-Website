'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GalleryFilter.module.css';

export default function GalleryFilter() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Weddings', 'Corporate', 'Social'];
  
  const images = [
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80', category: 'Weddings' },
    { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80', category: 'Social' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80', category: 'Weddings' },
    { src: 'https://img.magnific.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?semt=ais_hybrid&w=740&q=80', category: 'Corporate' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80', category: 'Corporate' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80', category: 'Social' },
  ];

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>GALLERY PREVIEW</span>
          <h2 className={styles.title}>Moments captured in time.</h2>
          <p className={styles.subtitle}>A glimpse into the magical celebrations hosted at our venue.</p>
        </div>

        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.src} 
                className={styles.imageWrapper}
              >
                <Image 
                  src={img.src} 
                  alt={`Gallery image of ${img.category}`} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className={styles.action}>
          <a href="/gallery" className="btn-secondary">VIEW FULL GALLERY</a>
        </div>
      </div>
    </section>
  );
}
