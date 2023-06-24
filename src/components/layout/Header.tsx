import A from '@/components/ui/Link';
import { FiShoppingBag } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20">
      <h1 className="font-bold text-xl">
        <A>Payments .</A>
      </h1>
      <nav>
        <A href="/store/cart" className="relative">
          <FiShoppingBag size={22} />
          <span className="absolute top-0 left-3 w-5 h-5 font-bold text-xs grid place-items-center bg-red-400 rounded-full">
            2
          </span>
        </A>
      </nav>
    </header>
  );
}
