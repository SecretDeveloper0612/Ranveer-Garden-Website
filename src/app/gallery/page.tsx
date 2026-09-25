'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80', category: 'Weddings', title: 'Grand Entrance' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80', category: 'Social', title: 'Evening Gala' },
  { id: 3, src: 'https://images.unsplash.com/photo-1530103862676-de8892bf309c?auto=format&fit=crop&q=80', category: 'Weddings', title: 'Reception Decor' },
  { id: 4, src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80', category: 'Corporate', title: 'Conference Setup' },
  { id: 5, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80', category: 'Corporate', title: 'Seminar Hall' },
  { id: 6, src: 'https://images.unsplash.com/photo-1544079633-8a35cc4294d1?auto=format&fit=crop&q=80', category: 'Social', title: 'Birthday Celebration' },
  { id: 7, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80', category: 'Venue', title: 'Lush Gardens' },
  { id: 8, src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80', category: 'Weddings', title: 'Bridal Setup' },
  { id: 9, src: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80', category: 'Dining', title: 'Exquisite Catering' },
];

const categories = ['All', 'Venue', 'Weddings', 'Corporate', 'Social', 'Dining'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
            alt="Gallery at Ranveer Garden"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>PORTFOLIO</span>
          <h1>Our Gallery</h1>
          <p>Explore the beauty and grandeur of Ranveer Garden.</p>
        </div>
      </section>

      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.filters}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.masonryGrid}>
            {filteredImages.map(img => (
              <div key={img.id} className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageTitle}>{img.title}</span>
                    <span className={styles.imageCategory}>{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
