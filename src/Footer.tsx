"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="block text-lg font-light tracking-[0.2em] text-white uppercase">
                Pastry
              </span>
              <span className="block text-lg font-semibold tracking-[0.35em] text-amber-500 uppercase">
                Crafted
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              Elevating the art of pastry through curated books, time-honored
              recipes, and a passion for precision.
            </p>
            <div className="flex gap-5 mt-8">
              <a href="#" className="text-stone-600 hover:text-amber-500 transition-colors duration-200" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-stone-600 hover:text-amber-500 transition-colors duration-200" aria-label="Pinterest">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-stone-600 hover:text-amber-500 transition-colors duration-200" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-6 font-medium">Shop</h4>
            <ul className="space-y-3">
              {["All Books", "Recipe Collections", "Pastry Fundamentals", "Advanced Techniques", "Gift Sets"].map((item) => (
                <li key={item}>
                  <Link href="/books" className="text-sm text-stone-500 hover:text-amber-500 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-6 font-medium">Recipes</h4>
            <ul className="space-y-3">
              {["Free Recipes", "Member Exclusives", "Seasonal Specials", "Classic Techniques", "Video Tutorials"].map((item) => (
                <li key={item}>
                  <Link href="/recipes" className="text-sm text-stone-500 hover:text-amber-500 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div id="newsletter">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-6 font-medium">The Newsletter</h4>
            <p className="text-sm text-stone-500 leading-relaxed mb-6">
              Exclusive recipes, new releases, and artisan secrets delivered monthly.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-stone-900 border border-stone-800 text-white placeholder-stone-600 text-sm px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-700 text-white text-xs tracking-[0.15em] uppercase hover:bg-amber-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-700 tracking-wide">
            &copy; {new Date().getFullYear()} PastryCrafted. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-xs text-stone-700 hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-stone-700 hover:text-stone-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs text-stone-700 hover:text-stone-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
