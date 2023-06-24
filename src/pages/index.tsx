import A from '@/components/ui/Link';

export default function Home() {
  return (
    <main className="max-w-xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-bold text-4xl">Buy it, Make it, Worth it!</h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, omnis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        accusamus.
      </p>
      <A href="/store" isbtn>
        Get start
      </A>
    </main>
  );
}
