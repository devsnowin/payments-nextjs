import Button from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import products from '@/data/products';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';

export default function Store() {
  return (
    <main>
      <h1 className="font-bold text-2xl my-4">Store</h1>
      <div className="grid grid-cols-4 gap-2">
        {products.map((product) => (
          <Card className="max-w-xs" key={product.id}>
            <CardHeader>
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="rounded-md w-auto h-auto"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.title}</CardTitle>
              {/* <CardDescription>{product.description}</CardDescription> */}
            </CardContent>
            <CardFooter className="justify-between">
              <p>{formatCurrency(product.price)}</p>
              <Button>Add to cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
