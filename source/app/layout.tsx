import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://mlmrx.github.io/'),
  alternates: { canonical: 'https://mlmrx.github.io/' },
  title: 'Mahesh Lambe — Work, research and other explorations',
  description:
    'Software, platforms and tools for a world in which people and intelligent agents work together. A collection of work by Mahesh Lambe.',
  openGraph: {
    url: 'https://mlmrx.github.io/',
    title: 'Mahesh Lambe',
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
        <link rel="preload" href="/wolf-walk.png" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
