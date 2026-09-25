import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ranveer The Garden Resort & Banquet | Wedding & Event Venue in Haldwani',
  description: 'Ranveer The Garden Resort & Banquet in Haldwani is a premium venue for weddings, engagements, birthdays, corporate events and special celebrations.',
};

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
