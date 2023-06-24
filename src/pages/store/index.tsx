import Button from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import products from '@/data/products';
import { Price } from '@/types';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Store() {
  const [prices, setPrices] = useState<Price[]>([]);
  const router = useRouter();

  async function fetchProductPrices() {
    const res = await fetch('/api/products');
    const data = await res.json();
    console.log('Data: ', data);
    setPrices(data.prices);
  }

  useEffect(() => {
    fetchProductPrices();
  }, []);

  async function handlePayment(price: Price) {
    const res = await fetch('/api/products/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId: price.id }),
    });

    const { url } = await res.json();
    if (url) router.push(url);
  }

  return (
    <main>
      <h1 className="font-bold text-2xl my-4">Store</h1>
      <div className="grid grid-cols-4 gap-2">
        {prices.map((price, i) => (
          <Card className="max-w-xs" key={price.id}>
            <CardHeader>
              <Image
                src={products[i].image}
                alt={products[i].title}
                width={100}
                height={100}
                className="rounded-md w-auto h-auto"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{products[i].title}</CardTitle>
            </CardContent>
            <CardFooter className="justify-between">
              <span>{formatCurrency(price.unit_amount / 100)}</span>
              <Button onClick={() => handlePayment(price)}>Add to cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
