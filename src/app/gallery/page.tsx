'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const images = [
  { id: 10, src: '/drive-download-20260530T053437Z-3-001/_DSC0935-HDR copy.jpg', category: 'Venue', title: 'Exterior View' },
  { id: 11, src: '/drive-download-20260530T053437Z-3-001/_DSC0916-HDR copy.jpg', category: 'Venue', title: 'Garden Pathway' },
  { id: 12, src: '/drive-download-20260530T053437Z-3-001/_DSC0911-HDR copy.jpg', category: 'Venue', title: 'Scenic Archway' },
  { id: 13, src: '/drive-download-20260530T053437Z-3-001/_DSC0906-HDR copy.jpg', category: 'Venue', title: 'Main Lawn' },
  { id: 14, src: '/drive-download-20260530T053437Z-3-001/_DSC0901-HDR copy.jpg', category: 'Venue', title: 'Resort Overview' },
  { id: 15, src: '/drive-download-20260530T053437Z-3-001/_DSC1080-HDR copy.jpg', category: 'Venue', title: 'Event Space' },
  { id: 17, src: '/drive-download-20260530T053437Z-3-001/_DSC1014-HDR copy.jpg', category: 'Restaurant', title: 'Restaurant Seating' },
  { id: 18, src: '/drive-download-20260530T053437Z-3-001/_DSC1013-HDR copy.jpg', category: 'Restaurant', title: 'Dining Area' },
  { id: 19, src: '/drive-download-20260530T053437Z-3-001/_DSC0900-HDR copy.jpg', category: 'Restaurant', title: 'Restaurant Interior' },
  { id: 20, src: '/drive-download-20260530T053437Z-3-001/_DSC0886-HDR copy.jpg', category: 'Restaurant', title: 'Fine Dining' },
  { id: 21, src: '/drive-download-20260530T053437Z-3-001/_DSC0866-HDR copy.jpg', category: 'Restaurant', title: 'Restaurant Ambience' },
  { id: 22, src: '/drive-download-20260530T053730Z-3-001/_DSC1019-HDR copy.jpg', category: 'Outdoor View', title: 'Outdoor Path' },
  { id: 23, src: '/drive-download-20260530T053730Z-3-001/_DSC1040-HDR copy.jpg', category: 'Outdoor View', title: 'Lawn Area' },
  { id: 24, src: '/drive-download-20260530T053730Z-3-001/_DSC1055-HDR copy.jpg', category: 'Outdoor View', title: 'Garden View' },
  { id: 25, src: '/drive-download-20260530T053730Z-3-001/_DSC1085-HDR copy.jpg', category: 'Outdoor View', title: 'Exterior Grounds' },
  { id: 26, src: '/drive-download-20260530T053730Z-3-001/_DSC1090-HDR copy.jpg', category: 'Outdoor View', title: 'Landscaped Garden' },
  { id: 27, src: '/drive-download-20260530T053730Z-3-001/_DSC1108-HDR-2 copy.jpg', category: 'Outdoor View', title: 'Walkway' },
  { id: 28, src: '/drive-download-20260530T053730Z-3-001/_DSC1114-HDR copy.jpg', category: 'Outdoor View', title: 'Resort Facade' },
  { id: 29, src: '/drive-download-20260530T053730Z-3-001/_DSC1124-HDR copy.jpg', category: 'Outdoor View', title: 'Entrance Architecture' },
  { id: 30, src: '/drive-download-20260530T053730Z-3-001/_DSC1139-HDR-2 copy.jpg', category: 'Outdoor View', title: 'Patio Area' },
  { id: 31, src: '/drive-download-20260530T053730Z-3-001/_DSC1174-HDR copy.jpg', category: 'Outdoor View', title: 'Evening Exterior' },
  { id: 32, src: '/drive-download-20260530T053730Z-3-001/_DSC1184-HDR copy.jpg', category: 'Outdoor View', title: 'Lighting Details' },
  { id: 33, src: '/drive-download-20260530T053730Z-3-001/_DSC1194-HDR copy.jpg', category: 'Outdoor View', title: 'Night Ambience' },
  { id: 34, src: '/drive-download-20260530T053730Z-3-001/_DSC1199-HDR-3 copy.jpg', category: 'Outdoor View', title: 'Poolside Setup' },
  { id: 35, src: '/drive-download-20260530T053730Z-3-001/_DSC1205-HDR copy.jpg', category: 'Outdoor View', title: 'Resort at Dusk' },
  { id: 36, src: '/drive-download-20260530T053730Z-3-001/_DSC1209-HDR copy.jpg', category: 'Outdoor View', title: 'Outdoor Gathering' },
  { id: 37, src: '/drive-download-20260530T053730Z-3-001/_DSC1214-HDR copy.jpg', category: 'Outdoor View', title: 'Celebratory Lighting' },
  { id: 38, src: '/drive-download-20260530T053730Z-3-001/_DSC1219-HDR copy.jpg', category: 'Outdoor View', title: 'Garden Walkway' },
  { id: 39, src: '/drive-download-20260530T053730Z-3-001/_DSC1224-HDR copy.jpg', category: 'Outdoor View', title: 'Scenic Exterior' },
  { id: 40, src: '/drive-download-20260530T053730Z-3-001/_DSC1234-HDR copy.jpg', category: 'Outdoor View', title: 'Resort Grounds' },
  { id: 41, src: '/drive-download-20260530T053730Z-3-001/_DSC1249-HDR copy.jpg', category: 'Outdoor View', title: 'Green Spaces' },
  { id: 42, src: '/drive-download-20260530T053730Z-3-001/_DSC1259-HDR copy.jpg', category: 'Outdoor View', title: 'Outdoor Architecture' },
  { id: 43, src: '/drive-download-20260530T053730Z-3-001/_DSC1269-HDR copy.jpg', category: 'Outdoor View', title: 'Lawn Area' },
  { id: 44, src: '/drive-download-20260530T053730Z-3-001/_DSC1278-HDR copy.jpg', category: 'Outdoor View', title: 'Resort Overview' },
  { id: 45, src: '/drive-download-20260530T053730Z-3-001/_DSC1280-HDR1 copy.jpg', category: 'Outdoor View', title: 'Garden Setup' },
  { id: 46, src: '/drive-download-20260530T053730Z-3-001/_DSC1284-HDR copy.jpg', category: 'Outdoor View', title: 'Exterior Details' },
  { id: 47, src: '/drive-download-20260530T053730Z-3-001/_DSC1289-HDR copy.jpg', category: 'Outdoor View', title: 'Pathway Lighting' },
  { id: 48, src: '/drive-download-20260530T053730Z-3-001/_DSC1294-HDR copy.jpg', category: 'Outdoor View', title: 'Relaxing Gardens' },
  { id: 49, src: '/drive-download-20260530T053730Z-3-001/_DSC1304-HDR copy.jpg', category: 'Outdoor View', title: 'Courtyard Ambience' },
  { id: 50, src: '/drive-download-20260530T053730Z-3-001/_DSC1309-HDR copy.jpg', category: 'Outdoor View', title: 'Spacious Lawns' },
  { id: 51, src: '/drive-download-20260530T053730Z-3-001/_DSC1319-HDR copy.jpg', category: 'Outdoor View', title: 'Venue Exterior' },
  { id: 52, src: '/drive-download-20260530T053730Z-3-001/_DSC1324-HDR-2 copy.jpg', category: 'Outdoor View', title: 'Grand Exterior' },
  { id: 53, src: '/drive-download-20260530T053730Z-3-001/DJI_20260521071204_0012_D copy.jpg', category: 'Outdoor View', title: 'Aerial View' },
  { id: 54, src: '/drive-download-20260530T053730Z-3-001/DJI_20260521072120_0015_D copy.jpg', category: 'Outdoor View', title: 'Resort Aerial' },
  { id: 55, src: '/drive-download-20260530T053730Z-3-001/DJI_20260521072124_0016_D-2 copy.jpg', category: 'Outdoor View', title: 'Drone Shot' },
  { id: 56, src: '/drive-download-20260530T053730Z-3-001/DJI_20260522072014_0050_D copy.jpg', category: 'Outdoor View', title: 'Aerial Perspective' },
  { id: 57, src: '/drive-download-20260530T053730Z-3-001/DJI_20260522072023_0052_D copy.jpg', category: 'Outdoor View', title: 'Garden Drone View' },
  { id: 58, src: '/Images/DSC0232-scaled.jpg', category: 'Venue', title: 'Resort Highlights' },
  { id: 59, src: '/Images/DSC0273-scaled.jpg', category: 'Venue', title: 'Resort Details' },
  { id: 60, src: '/Images/DSC0373-scaled.jpg', category: 'Venue', title: 'Resort Amenities' },
  { id: 61, src: '/Images/DSC0481-HDR-scaled.jpg', category: 'Venue', title: 'Event Hall' },
  { id: 62, src: '/Images/DSC0626-HDR-scaled.jpg', category: 'Venue', title: 'Interior Decor' },
  { id: 63, src: '/Images/DSC0746-HDR-scaled.jpg', category: 'Venue', title: 'Resort Architecture' }
];

const categories = ['All', 'Venue', 'Restaurant', 'Outdoor View'];

const heroSlides = [
  {
    image: '/drive-download-20260530T053437Z-3-001/_DSC0901-HDR copy.jpg',
    title: 'Our Venue',
    subtitle: 'Explore the grandeur of our magnificent event spaces.'
  },
  {
    image: '/drive-download-20260530T053437Z-3-001/_DSC0886-HDR copy.jpg',
    title: 'Our Restaurant',
    subtitle: 'Experience exquisite dining and culinary perfection.'
  },
  {
    image: '/drive-download-20260530T053730Z-3-001/_DSC1214-HDR copy.jpg',
    title: 'Outdoor View',
    subtitle: 'Discover our lush gardens and scenic outdoor landscapes.'
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle keyboard navigation
  if (typeof window !== 'undefined') {
    window.onkeydown = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
  }

  const handleNext = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={styles.heroImage}
            style={{ opacity: index === currentHeroSlide ? 1 : 0, transition: 'opacity 1s ease-in-out', position: 'absolute', inset: 0 }}
          >
            <Image 
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className={styles.heroOverlay}></div>
          </div>
        ))}
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>PORTFOLIO</span>
          <h1 key={currentHeroSlide} style={{ animation: 'fadeIn 1s ease-out' }}>{heroSlides[currentHeroSlide].title}</h1>
          <p key={`p-${currentHeroSlide}`} style={{ animation: 'fadeIn 1s ease-out' }}>{heroSlides[currentHeroSlide].subtitle}</p>
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
            {filteredImages.map((img, index) => (
              <div key={img.id} className={styles.gridItem}>
                <div className={styles.imageWrapper} onClick={() => setActiveIndex(index)}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeIndex !== null && (
        <div className={styles.modal} onClick={() => setActiveIndex(null)}>
          <button className={styles.closeBtn} onClick={() => setActiveIndex(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button className={styles.navBtn} onClick={(e) => { e.stopPropagation(); handlePrev(); }} style={{ left: '20px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredImages[activeIndex].src}
              alt={filteredImages[activeIndex].title || 'Gallery Image'}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
            />
          </div>

          <button className={styles.navBtn} onClick={(e) => { e.stopPropagation(); handleNext(); }} style={{ right: '20px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className={styles.imageCounter}>
            {activeIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
