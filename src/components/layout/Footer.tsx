import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center py-4">
      <p>
        @{new Date().getFullYear()}. Made by{' '}
        <Link
          href="https://zipy.live/snowin/website/"
          target="_blank"
          className="underline"
        >
          snowin
        </Link>
      </p>
    </footer>
  );
}
