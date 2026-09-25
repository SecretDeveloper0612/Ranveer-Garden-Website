import styles from './Testimonial.module.css';

const testimonials = [
  {
    quote: "We hosted our daughter's wedding and reception here and had an incredible experience. The 7,500 sq. ft. banquet hall was magnificent, the garden was an enchanting backdrop, and the catering staff went to unbelievable extremes.",
    name: "Vikas Sharma",
    meta: "Father of the Bride"
  },
  {
    quote: "A perfect venue for any grand celebration. The management was extremely cooperative, and the decor was absolutely breathtaking. Every guest praised the food and hospitality.",
    name: "Neha & Rahul",
    meta: "Bride & Groom"
  },
  {
    quote: "Ranveer Garden is hands down the best resort in Haldwani. The rooms were luxurious and the event spaces were immaculately maintained. Made our corporate retreat a huge success.",
    name: "Amit Singhal",
    meta: "Corporate Guest"
  },
  {
    quote: "The lush green lawns and beautifully designed indoor spaces gave us exactly what we envisioned for our anniversary. The team ensured every single detail was flawless.",
    name: "Pooja Mehta",
    meta: "Anniversary Event"
  }
];

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.googleIcon}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <span className={styles.eyebrow}>GUEST EXPERIENCES</span>
        <h2 className={styles.title}>What Our Guests Say</h2>
      </div>
      
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* Double array for infinite scroll */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.cardHeader}>
                <div className={styles.authorInfo}>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.meta}>{testimonial.meta}</p>
                </div>
                <GoogleIcon />
              </div>
              <div className={styles.stars}>
                ★★★★★
              </div>
              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
