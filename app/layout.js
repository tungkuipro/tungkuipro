import './globals.css';
import { LanguageProvider } from './components/LanguageProvider';

export const metadata = {
  title: 'TUNGKUI PRO | DRAINAGE CLEARANCE EXPERT',
  description: 'Professional drain cleaning and plumbing services.',
  keywords: ['Drain Cleaning', 'Plumbing', 'Kitchen Drain', 'Bathroom Drain', 'TUNGKUI PRO'],
  openGraph: { title: 'TUNGKUI PRO', description: 'DRAINAGE CLEARANCE EXPERT TUNGKUI PRO Website', images: ['/og-image.png'] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
