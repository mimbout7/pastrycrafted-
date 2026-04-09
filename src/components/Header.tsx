"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Pastry
          </span>
          <span className="text-lg font-semibold tracking-[0.2em] text-stone-900">
            Crafted
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-stone-700 hover:text-stone-950">
            Home
          </Link>
          <Link href="/books" className="text-sm text-stone-700 hover:text-stone-950">
            Books
          </Link>
          <Link href="/recipes" className="text-sm text-stone-700 hover:text-stone-950">
            Recipes
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/recipes"
            className="hidden rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-800 transition hover:border-stone-900 hover:text-stone-950 md:inline-flex"
          >
            Explore Recipes
          </Link>
          <Link
            href="/books"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm text-white transition hover:bg-stone-700"
          >
            Shop Books
          </Link>
        </div>
      </div>
    </header>
  );
}
