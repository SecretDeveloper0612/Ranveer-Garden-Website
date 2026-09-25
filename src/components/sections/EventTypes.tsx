import Link from 'next/link';
import styles from './EventTypes.module.css';

export default function EventTypes() {
  const events = [
    {
      slug: 'wedding',
      name: 'Wedding & Pre-wedding',
      description: 'The perfect start to your forever.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
      size: 'large'
    },
    {
      slug: 'social',
      name: 'Social Gatherings',
      description: 'Moments to cherish together.',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80',
      size: 'medium'
    },
    {
      slug: 'birthday',
      name: 'Birthdays & Anniversaries',
      description: 'Celebrate your milestones.',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80',
      size: 'small'
    },
    {
      slug: 'corporate',
      name: 'Corporate Events',
      description: 'Professional spaces for growth.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80',
      size: 'small'
    },
    {
      slug: 'exhibition',
      name: 'Exhibitions & Culture',
      description: 'Grand halls for big ideas.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
      size: 'small'
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

        <div className={styles.masonry}>
          {events.map((event, index) => (
            <div 
              key={event.slug} 
              className={`${styles.card} ${styles[event.size]}`}
            >
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
    </section>
  );
}
