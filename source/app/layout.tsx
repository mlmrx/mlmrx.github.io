import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL('https://mlmrx.github.io/'),alternates:{canonical:'https://mlmrx.github.io/'},title:'Mahesh Lambe — Building trust',description:'Founder of Unify Dynamics. Building the trust layer for the internet of AI agents through working systems, MIT Project NANDA research and OWASP standards.',openGraph:{url:'https://mlmrx.github.io/',title:'Mahesh Lambe — Building trust',description:'AI systems, research and a more trustworthy agentic internet.',type:'website'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

