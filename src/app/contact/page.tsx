import styles from './page.module.css';
import { contact } from '@/data/contact';

export const metadata = {
  title: 'Contact Us | Ranveer Garden Resort & Banquet',
  description: 'Get in touch with us for event bookings, room reservations, or any general inquiries.',
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={`section ${styles.contactSection}`}>
        <div className={`container ${styles.contactContainer}`}>
          
          <div className={styles.contactInfo}>
            <span className={styles.eyebrow}>GET IN TOUCH</span>
            <h2>Let&apos;s Plan Your Perfect Event</h2>
            <p className={styles.introText}>
              Whether you&apos;re planning a monumental celebration or seeking a luxurious retreat, our team is ready to assist you in making it a reality.
            </p>

            <div className={styles.infoGroup}>
              <h3>Visit Us</h3>
              <p>{contact.address.line1}</p>
              <p>{contact.address.line2}</p>
              <p>{contact.address.city}, {contact.address.state} {contact.address.zip}</p>
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Get Directions &rarr;
              </a>
            </div>

            <div className={styles.infoGroup}>
              <h3>Call Us</h3>
              <p><strong>Director:</strong> <a href={`tel:${contact.directorPhone}`}>{contact.directorPhone}</a></p>
              <p><strong>Manager:</strong> <a href={`tel:${contact.managerPhone}`}>{contact.managerPhone}</a></p>
            </div>

            <div className={styles.infoGroup}>
              <h3>Email Us</h3>
              <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>

            <div className={styles.infoGroup}>
              <h3>WhatsApp</h3>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Chat with us &rarr;
              </a>
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <div className={styles.contactForm}>
              <h2>Send a Message</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="wedding">Wedding Inquiry</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="room">Room Reservation</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={`container ${styles.mapContainer}`}>
          <div className={styles.mapWrapper}>
            <iframe 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ranveer%20Garden,%20Satya%20Lok%20Colony,%20Dahariya,%20Haldwani,%20Uttarakhand%20263139&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ranveer Garden Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
