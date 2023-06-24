import A from '@/components/ui/Link';

export default function Success() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-bold text-2xl max-w-sm">
        Your order has been confirmed successfully 🎉
      </h1>
      <A href="/store" isbtn variant="success">
        Continue Shopping
      </A>
    </main>
  );
}
