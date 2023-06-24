import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20">
      <h1>Payments .</h1>
      <nav>
        <Link href="/">Signin</Link>
      </nav>
    </header>
  );
}
