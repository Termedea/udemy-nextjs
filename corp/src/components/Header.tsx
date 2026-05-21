import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-background/80 backdrop-blur-sm border-b border-foreground/10 fixed w-full z-50 py-xs">
      <nav className="w-2/3 flex mx-auto items-center justify-between h-16">
        <Link className="font-serif italic text-foreground text-5xl p-sm" href="/">
          Awesome logo
        </Link>
        <div className="flex gap-4 justify-end">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
