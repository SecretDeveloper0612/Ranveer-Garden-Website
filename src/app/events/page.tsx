import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Events & Weddings | Ranveer Garden Resort & Banquet',
  description: 'Host unforgettable events, from majestic weddings to elite corporate gatherings at Ranveer Garden.',
};

const eventTypes = [
  {
    slug: 'wedding',
    title: 'Wedding & Pre-wedding',
    description: 'Celebrate the beginning of your lifelong journey together in a venue that reflects the grandeur of your love story. Our luxurious banquet halls and sprawling lawns provide the perfect canvas for your ceremonies.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80'
  },
  {
    slug: 'social',
    title: 'Social Gatherings',
    description: 'Whether it is a family reunion, a get-together, or a festive celebration, Ranveer Garden provides a warm and inviting atmosphere to make your social gatherings truly unforgettable.',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80'
  },
  {
    slug: 'birthday',
    title: 'Birthdays & Anniversaries',
    description: 'Turn your milestones into beautiful memories. Our team helps you craft the perfect birthday bash or anniversary celebration with customized themes and exceptional hospitality.',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80'
  },
  {
    slug: 'corporate',
    title: 'Corporate Events',
    description: 'Host your product launches, seminars, and corporate retreats with us. We provide state-of-the-art facilities and a professional environment that leaves a lasting impression.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80'
  },
  {
    slug: 'exhibition',
    title: 'Exhibitions & Culture',
    description: 'Our massive, pillar-less halls offer a blank canvas for cultural events, art exhibitions, and large-scale showcases. The expansive space allows for flexible booth layouts and unhindered movement.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
  }
];

export default function EventsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
            alt="Events at Ranveer Garden"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>CELEBRATIONS</span>
          <h1>Events & Weddings</h1>
          <p>Where moments become masterpieces.</p>
        </div>
      </section>

      <section className={`section ${styles.introSection}`}>
        <div className="container text-center">
          <h2 className={styles.introTitle}>The Perfect Venue for Every Occasion</h2>
          <p className={styles.introSubtitle}>
            At Ranveer Garden, we understand that every event is unique. Our dedicated team of event planners works tirelessly to bring your vision to life, ensuring flawless execution and a truly unforgettable experience.
          </p>
        </div>
      </section>

      <section className={styles.eventsGridSection}>
        <div className="container">
          <div className={styles.eventsList}>
            {eventTypes.map((event, index) => (
              <div key={event.slug} className={`${styles.eventCard} ${index % 2 !== 0 ? styles.eventCardReverse : ''}`}>
                <div className={styles.eventImage}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.image}
                  />
                </div>
                <div className={styles.eventContent}>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <Link href={`/events/${event.slug}`} className="btn-primary">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Ready to Start Planning?</h2>
          <p className={styles.ctaSubtitle}>Contact our event specialists today to discuss your requirements and schedule a venue tour.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
