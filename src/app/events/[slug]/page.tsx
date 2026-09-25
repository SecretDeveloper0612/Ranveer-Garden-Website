import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// We can define the event data here
const eventsData: Record<string, { title: string, subtitle: string, image: string, description: string, features: string[] }> = {
  'wedding': {
    title: 'Wedding & Pre-wedding',
    subtitle: 'The perfect start to your forever.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
    description: 'Celebrate the beginning of your lifelong journey together in a venue that reflects the grandeur of your love story. Our luxurious banquet halls and sprawling lawns provide the perfect canvas for your wedding and pre-wedding ceremonies.',
    features: ['Grand Pillar-less Banquet Hall', 'Spacious Lush Green Lawns', 'Premium Decor Options', 'Dedicated Bridal Suite', 'Gourmet Catering']
  },
  'social': {
    title: 'Social Gatherings',
    subtitle: 'Moments to cherish together.',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80',
    description: 'Whether it is a family reunion, a get-together, or a festive celebration, Ranveer Garden provides a warm and inviting atmosphere to make your social gatherings truly unforgettable.',
    features: ['Flexible Seating Arrangements', 'Customizable Menus', 'Warm Ambience', 'Valet Parking', 'Dedicated Event Manager']
  },
  'birthday': {
    title: 'Birthdays & Anniversaries',
    subtitle: 'Celebrate your milestones.',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80',
    description: 'Turn your milestones into beautiful memories. Our team helps you craft the perfect birthday bash or anniversary celebration with customized themes and exceptional hospitality.',
    features: ['Thematic Decor', 'Intimate Dining Spaces', 'Premium Sound System', 'Custom Cake Arrangements', 'Photobooth Setup']
  },
  'corporate': {
    title: 'Corporate Events',
    subtitle: 'Professional spaces for growth.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80',
    description: 'Host your product launches, seminars, and corporate retreats with us. We provide state-of-the-art facilities and a professional environment that leaves a lasting impression on your clients and team.',
    features: ['High-speed Wi-Fi', 'Audio/Visual Equipment', 'Formal Seating', 'Networking Area', 'Executive Catering']
  },
  'exhibition': {
    title: 'Exhibitions & Culture',
    subtitle: 'Grand halls for big ideas.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    description: 'Our massive, pillar-less halls offer a blank canvas for cultural events, art exhibitions, and large-scale showcases. The expansive space allows for flexible booth layouts and unhindered movement.',
    features: ['Unobstructed Views', 'Flexible Floor Plans', 'High Ceilings', 'Excellent Lighting', 'Ample Parking']
  }
};

export async function generateStaticParams() {
  return Object.keys(eventsData).map((slug) => ({ slug }));
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const data = eventsData[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src={data.image} 
            alt={data.title} 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>EVENTS AT RANVEER</span>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>
      </section>

      <section className={styles.details}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
            <h2>About this event type</h2>
            <p className={styles.description}>{data.description}</p>
            
            <div className={styles.features}>
              <h3>What's Included</h3>
              <ul>
                {data.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.check}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cta}>
              <Link href="/contact" className="btn-primary">
                Plan Your Event
              </Link>
              <Link href="/events" className="btn-outline" style={{ color: 'var(--color-forest)', borderColor: 'var(--color-forest)' }}>
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
