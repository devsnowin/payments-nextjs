import Header from '@/components/layout/Header';
import Footer from './Footer';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-6xl mx-auto min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </section>
  );
}
