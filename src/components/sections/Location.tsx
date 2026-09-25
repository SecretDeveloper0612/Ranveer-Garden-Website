import { contact } from '@/data/contact';
import styles from './Location.module.css';

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#102217" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#102217" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#102217" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Location() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>LOCATION & MAP</span>
          <h2 className={styles.title}>A step away from town & hills.</h2>
          <p className={styles.text}>
            Conveniently located in the heart of Haldwani, yet perfectly positioned to offer a serene escape. Easy access from major transport hubs.
          </p>
          
          <ul className={styles.contactList}>
            <li className={styles.contactCard}>
              <span className={styles.icon}><MapPinIcon /></span>
              <div>
                <h4>Visit Us</h4>
                <p>{contact.address.full}</p>
              </div>
            </li>
            <li className={styles.contactCard}>
              <span className={styles.icon}><PhoneIcon /></span>
              <div>
                <h4>Call Us</h4>
                <p><a href={`tel:${contact.directorPhone}`}>{contact.directorPhone}</a></p>
              </div>
            </li>
            <li className={styles.contactCard}>
              <span className={styles.icon}><MailIcon /></span>
              <div>
                <h4>Email Us</h4>
                <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              </div>
            </li>
          </ul>
          
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GET DIRECTIONS &rarr;
          </a>
        </div>
        
        <div className={styles.mapWrapper}>
          <iframe
            src="https://maps.google.com/maps?q=Ranveer+Garden,+Satya+Lok+Colony,+Dahariya,+Haldwani,+Uttarakhand+263139&t=&z=14&ie=UTF8&iwloc=&output=embed"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ranveer Garden Location Map"
          />
        </div>
      </div>
    </section>
  );
}
