import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Faithful Samuel — UI/UX & Product Designer',
  description: 'UI/UX & Product Designer crafting intuitive, engaging digital products, web platforms, and mobile apps.',
  openGraph: {
    title: 'Faithful Samuel — UI/UX & Product Designer',
    description: 'UI/UX & Product Designer crafting intuitive, engaging digital products, web platforms, and mobile apps.',
    type: 'website',
    url: 'https://faithfulsamuel.design',
    siteName: 'Faithful Samuel Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faithful Samuel — UI/UX & Product Designer',
    description: 'UI/UX & Product Designer crafting intuitive, engaging digital products, web platforms, and mobile apps.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
        suppressHydrationWarning
      >
        <div className="relative flex min-h-dvh flex-col bg-background" suppressHydrationWarning>
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
