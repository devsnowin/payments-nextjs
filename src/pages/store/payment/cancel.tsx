import A from '@/components/ui/Link';

export default function Cancel() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-bold text-2xl max-w-sm">
        Oop! you just cancelled the order
      </h1>
      <A href="/store" isbtn variant="error">
        Return to store
      </A>
    </main>
  );
}
