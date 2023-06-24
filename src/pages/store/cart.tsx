import Button from '@/components/ui/Button';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';

export default function Cart() {
  return (
    <main className="w-full my-8 divide-y">
      <div className="w-full py-4 flex justify-between items-start gap-4">
        <div className="flex items-start gap-4">
          <Image
            src="/assets/dreamylandscape.png"
            alt="image"
            width={100}
            height={100}
            className="rounded-md"
          />
          <div>
            <h2 className="font-bold text-xl">Digital Sculpture</h2>
            <p>{formatCurrency(203.85)}</p>
          </div>
        </div>
        <div>
          <h2>Quanity</h2>
          <p>3</p>
        </div>
        <Button variant="error">Remove</Button>
      </div>
      <div className="w-full py-4 flex justify-between items-start gap-4">
        <div className="flex items-start gap-4">
          <Image
            src="/assets/dreamylandscape.png"
            alt="image"
            width={100}
            height={100}
            className="rounded-md"
          />
          <div>
            <h2 className="font-bold text-xl">Digital Sculpture</h2>
            <p>{formatCurrency(203.85)}</p>
          </div>
        </div>
        <div>
          <h2>Quanity</h2>
          <p>3</p>
        </div>
        <Button variant="error">Remove</Button>
      </div>
    </main>
  );
}
