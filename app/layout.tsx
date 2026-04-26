import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Modern Sans-serif for UI elements and buttons
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Luxury Serif for headings and "Cutlet" branding
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Cutlet | Gourmet Burger & Pizza Lounge',
  description: "Faisalabad's premier destination for artisanal dining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Adding the variables here allows you to use font-sans and font-serif in Tailwind */}
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
