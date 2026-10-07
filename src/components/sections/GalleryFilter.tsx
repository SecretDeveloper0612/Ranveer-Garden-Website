'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GalleryFilter.module.css';

export default function GalleryFilter() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Venue', 'Restaurant', 'Outdoor View'];
  
  const images = [
    { src: '/drive-download-20260530T053437Z-3-001/_DSC0916-HDR copy.jpg', category: 'Venue' },
    { src: '/drive-download-20260530T053437Z-3-001/_DSC1080-HDR copy.jpg', category: 'Venue' },
    { src: '/drive-download-20260530T053437Z-3-001/_DSC1014-HDR copy.jpg', category: 'Restaurant' },
    { src: '/drive-download-20260530T053437Z-3-001/_DSC0886-HDR copy.jpg', category: 'Restaurant' },
    { src: '/drive-download-20260530T053730Z-3-001/_DSC1205-HDR copy.jpg', category: 'Outdoor View' },
    { src: '/drive-download-20260530T053730Z-3-001/_DSC1214-HDR copy.jpg', category: 'Outdoor View' },
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
