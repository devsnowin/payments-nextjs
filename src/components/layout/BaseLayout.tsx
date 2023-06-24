import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${inter.className} --font-sans max-w-6xl mx-auto min-h-screen grid grid-rows-[auto_1fr_auto]`}
    >
      <Header />
      {children}
      <Footer />
    </section>
  );
}
