import Link from "next/link";

const books = [
  {
    id: 1,
    title: "The Art of French Pastry",
    author: "Jacquy Pfeiffer",
    price: "$58",
    category: "French Classics",
    pages: 432,
    year: 2013,
    description:
      "A masterwork in patisserie — from croissants to opera cakes, the definitive guide to French technique. Pfeiffer's exacting methods have trained a generation of world-class pastry chefs.",
    accent: "bg-amber-50",
  },
  {
    id: 2,
    title: "Dominique Ansel: The Secret Recipes",
    author: "Dominique Ansel",
    price: "$48",
    category: "Modern Pastry",
    pages: 320,
    year: 2014,
    description:
      "Behind the Cronut and beyond. The visionary pastry chef's most prized creations, finally revealed. An intimate look at the creative process of a true innovator.",
    accent: "bg-stone-50",
  },
  {
    id: 3,
    title: "Tartine Bread & Pastry",
    author: "Chad Robertson",
    price: "$52",
    category: "Artisan Baking",
    pages: 304,
    year: 2010,
    description:
      "The cult classic that redefined artisan baking. Slow fermentation, whole grains, and pure craft — for the baker willing to invest time for transcendence.",
    accent: "bg-amber-50",
  },
  {
    id: 4,
    title: "Bouchon Bakery",
    author: "Thomas Keller",
    price: "$65",
    category: "French Classics",
    pages: 400,
    year: 2012,
    description:
      "Thomas Keller distills decades of excellence into an approachable yet rigorous guide to the cookies, cakes, and pastries of his celebrated Bouchon Bakeries.",
    accent: "bg-stone-50",
  },
  {
    id: 5,
    title: "The Pastry Chef's Companion",
    author: "Glenn Rinsky",
    price: "$42",
    category: "Reference",
    pages: 560,
    year: 2009,
    description:
      "The essential desk reference for every serious pastry cook — over 4,800 terms, techniques, and definitions spanning the full breadth of the pastry arts.",
    accent: "bg-amber-50",
  },
  {
    id: 6,
    title: "Chocolate: A Love Story",
    author: "Max Brenner",
    price: "$46",
    category: "Chocolate Arts",
    pages: 256,
    year: 2011,
    description:
      "A sensory journey through the world of chocolate — from bean selection to the final ganache, told with the passion of a true chocolate philosopher.",
    accent: "bg-stone-50",
  },
];

const filters = ["All", "French Classics", "Modern Pastry", "Artisan Baking", "Chocolate Arts", "Reference"];

export default function BooksPage() {
  return (
    <div className="pt-20">
      <section className="bg-stone-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-500 mb-6" style={{ fontFamily: "var(--font-sans)" }}>
            The Collection
          </p>
          <h1 className="text-6xl lg:text-8xl font-light text-white leading-[0.95] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Pastry Books
          </h1>
          <p className="text-stone-400 text-lg max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            Every title personally vetted. Every author a master of their craft.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-8 overflow-x-auto py-5">
            {filters.map((f) => (
              <button
                key={f}
                className={`text-xs tracking-[0.15em] uppercase whitespace-nowrap transition-colors pb-1 ${
                  f === "All"
                    ? "text-amber-700 border-b border-amber-700"
                    : "text-stone-500 hover:text-stone-900 border-b border-transparent"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map((book, i) => (
              <div key={book.id} className="group cursor-pointer">
                <div className={`${book.accent} aspect-[3/4] flex items-end p-8 mb-6 relative overflow-hidden`}>
                  <div className="absolute top-8 left-8 right-8 bottom-8 border border-stone-200 group-hover:border-amber-300 transition-colors duration-500" />
                  <div className="absolute top-12 left-12 right-12 bottom-12 border border-stone-100 group-hover:border-amber-200 transition-colors duration-500" />
                  <div className="relative z-10">
                    <span className="text-xs tracking-[0.15em] uppercase text-stone-400 block mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      {book.category}
                    </span>
                    <h3 className="text-xl font-light text-stone-800 leading-tight group-hover:text-amber-800 transition-colors duration-300" style={{ fontFamily: "var(--font-serif)" }}>
                      {book.title}
                    </h3>
                  </div>
                  <div className="absolute top-8 right-8 text-7xl font-light text-stone-200 leading-none" style={{ fontFamily: "var(--font-serif)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-stone-500 tracking-wide mb-1" style={{ fontFamily: "var(--font-sans)" }}>
                        by {book.author}
                      </p>
                      <p className="text-xs text-stone-400" style={{ fontFamily: "var(--font-sans)" }}>
                        {book.pages} pages · {book.year}
                      </p>
                    </div>
                    <span className="text-xl font-light text-amber-700" style={{ fontFamily: "var(--font-serif)" }}>
                      {book.price}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed mb-5" style={{ fontFamily: "var(--font-sans)" }}>
                    {book.description}
                  </p>
                  <button className="w-full py-3 bg-stone-900 text-white text-xs tracking-[0.15em] uppercase hover:bg-amber-700 transition-colors duration-300" style={{ fontFamily: "var(--font-sans)" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-amber-700 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            Can&apos;t Decide?
          </p>
          <h2 className="text-4xl font-light text-stone-900 mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Let us curate your library.
          </h2>
          <p className="text-stone-500 leading-relaxed mb-8" style={{ fontFamily: "var(--font-sans)" }}>
            Tell us your skill level and interests — we&apos;ll recommend the perfect books to build your pastry foundation.
          </p>
          <Link href="#newsletter" className="inline-flex items-center gap-4 px-10 py-4 bg-stone-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-amber-700 transition-colors duration-300" style={{ fontFamily: "var(--font-sans)" }}>
            Get a Recommendation
          </Link>
        </div>
      </section>
    </div>
  );
}
