import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://mlmrx.github.io/'),
  alternates: { canonical: 'https://mlmrx.github.io/' },
  title: 'Love of Open Secure AI — Mahesh Lambe',
  description:
    'Software, platforms and tools for a world in which people and intelligent agents work together. A collection of work by Mahesh Lambe.',
  openGraph: {
    url: 'https://mlmrx.github.io/',
    title: 'Love of Open Secure AI',
    description:
      'Work, research and other explorations in AI, trust and systems.',
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/baskervville-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
