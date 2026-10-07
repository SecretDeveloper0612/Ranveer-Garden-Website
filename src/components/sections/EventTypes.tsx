import styles from './EventTypes.module.css';

export default function EventTypes() {
  const events = [
    {
      slug: 'wedding',
      name: 'Wedding & Pre-wedding',
      description: 'The perfect start to your forever.',
      image: '/drive-download-20260530T053730Z-3-001/_DSC1214-HDR copy.jpg',
    },
    {
      slug: 'social',
      name: 'Social Gatherings',
      description: 'Moments to cherish together.',
      image: '/drive-download-20260530T053730Z-3-001/_DSC1209-HDR copy.jpg',
    },
    {
      slug: 'birthday',
      name: 'Birthdays & Anniversaries',
      description: 'Celebrate your milestones.',
      image: '/drive-download-20260530T053437Z-3-001/_DSC1014-HDR copy.jpg',
    },
    {
      slug: 'corporate',
      name: 'Corporate Events',
      description: 'Professional spaces for growth.',
      image: '/drive-download-20260530T053437Z-3-001/_DSC1080-HDR copy.jpg',
    },
    {
      slug: 'exhibition',
      name: 'Exhibitions & Culture',
      description: 'Grand halls for big ideas.',
      image: '/drive-download-20260530T053437Z-3-001/_DSC0901-HDR copy.jpg',
    }
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>EVENTS AT RANVEER GARDEN</span>
          <h2 className={styles.title}>Celebrate it your way.</h2>
          <p className={styles.subtitle}>From grand weddings to intimate gatherings, we offer a perfect canvas to create your magical moments.</p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            {/* Track 1 */}
            <div className={styles.carouselTrack}>
              {events.map((event) => (
                <div key={`t1-${event.slug}`} className={styles.card}>
                  <div 
                    className={styles.image} 
                    style={{ backgroundImage: `url('${event.image}')` }}
                  ></div>
                  <div className={styles.overlay}>
                    <div className={styles.content}>
                      <h3>{event.name}</h3>
                      <p>{event.description}</p>
                    </div>
                    <div className={styles.icon}>
                      <span className={styles.arrowBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Track 2 (Duplicate for infinite scroll) */}
            <div className={styles.carouselTrack}>
              {events.map((event) => (
                <div key={`t2-${event.slug}`} className={styles.card}>
                  <div 
                    className={styles.image} 
                    style={{ backgroundImage: `url('${event.image}')` }}
                  ></div>
                  <div className={styles.overlay}>
                    <div className={styles.content}>
                      <h3>{event.name}</h3>
                      <p>{event.description}</p>
                    </div>
                    <div className={styles.icon}>
                      <span className={styles.arrowBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
