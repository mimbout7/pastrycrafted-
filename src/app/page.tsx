import Link from "next/link";

const featuredBooks = [
  {
    id: 1,
    title: "The Art of French Pastry",
    author: "Jacquy Pfeiffer",
    price: "$58",
    category: "French Classics",
    description:
      "A masterwork in patisserie — from croissants to opera cakes, the definitive guide to French technique.",
    accent: "bg-amber-50",
  },
  {
    id: 2,
    title: "Dominique Ansel: The Secret Recipes",
    author: "Dominique Ansel",
    price: "$48",
    category: "Modern Pastry",
    description:
      "Behind the Cronut and beyond. The visionary pastry chef's most prized creations, finally revealed.",
    accent: "bg-stone-50",
  },
  {
    id: 3,
    title: "Tartine Bread & Pastry",
    author: "Chad Robertson",
    price: "$52",
    category: "Artisan Baking",
    description:
      "The cult classic that redefined artisan baking. Slow fermentation, whole grains, and pure craft.",
    accent: "bg-amber-50",
  },
];

const featuredRecipes = [
  {
    id: 1,
    title: "Kouign-Amann",
    origin: "Brittany, France",
    time: "3 hrs",
    level: "Advanced",
    description: "Buttery, caramelized layers of laminated dough — a revelation in simplicity.",
  },
  {
    id: 2,
    title: "Mille-Feuille",
    origin: "Paris, France",
    time: "4 hrs",
    level: "Advanced",
    description: "Thousand paper-thin layers of puff pastry, vanilla cream, and fondant glaze.",
  },
  {
    id: 3,
    title: "Tarte Tatin",
    origin: "Loire Valley",
    time: "1.5 hrs",
    level: "Intermediate",
    description: "The upside-down apple tart that conquered the world. Caramel, butter, perfection.",
  },
  {
    id: 4,
    title: "Paris-Brest",
    origin: "Paris, France",
    time: "2.5 hrs",
    level: "Intermediate",
    description: "Choux pastry filled with praline cream — a cyclist's dessert turned Parisian icon.",
  },
];

const categories = [
  { name: "French Classics", count: 24 },
  { name: "Modern Pastry", count: 18 },
  { name: "Artisan Baking", count: 31 },
  { name: "Chocolate Arts", count: 15 },
];

export default function Home() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-stone-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`,
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-600 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-500 mb-8 font-light" style={{ fontFamily: "var(--font-sans)" }}>
              The Art of Fine Pastry
            </p>
            <h1 className="text-6xl lg:text-8xl font-light text-white leading-[0.95] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              Where Craft
              <br />
              <em className="italic text-amber-400">Meets</em>
              <br />
              Precision.
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed max-w-md mb-12 font-light" style={{ fontFamily: "var(--font-sans)" }}>
              Curated pastry books and time-honored recipes for those who
              believe that baking is not merely cooking — it is art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/books" className="inline-flex items-center justify-center px-10 py-4 bg-amber-700 text-white text-xs tracking-[0.2em] uppercase hover:bg-amber-600 transition-colors duration-300" style={{ fontFamily: "var(--font-sans)" }}>
                Explore Books
              </Link>
              <Link href="/recipes" className="inline-flex items-center justify-center px-10 py-4 border border-stone-700 text-stone-300 text-xs tracking-[0.2em] uppercase hover:border-amber-600 hover:text-amber-400 transition-colors duration-300" style={{ fontFamily: "var(--font-sans)" }}>
                Free Recipes
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-8">
            <div className="border border-stone-800 p-10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "180+", label: "Curated Recipes" },
                  { number: "42",   label: "Premium Books" },
                  { number: "12K+", label: "Home Bakers" },
                  { number: "8",    label: "Award-Winning Authors" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-4">
                    <div className="text-4xl font-light text-amber-400 mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                      {stat.number}
                    </div>
                    <div className="text-xs tracking-[0.15em] uppercase text-stone-600" style={{ fontFamily: "var(--font-sans)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="border-l-2 border-amber-700 pl-8">
              <p className="text-stone-400 text-lg italic leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;Pastry is the architecture of flavor — every layer a decision, every crumb a consequence.&rdquo;
              </p>
              <cite className="text-stone-600 text-xs tracking-[0.15em] uppercase mt-4 block not-italic" style={{ fontFamily: "var(--font-sans)" }}>
                — Pierre Hermé
              </cite>
            </blockquote>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase text-stone-600" style={{ fontFamily: "var(--font-sans)" }}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent" />
        </div>
      </section>

      {/* ── Category Strip ── */}
      <section id="collections" className="bg-amber-700 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {categories.map((cat) => (
              <Link key={cat.name} href="/books" className="flex items-center gap-3 group" style={{ fontFamily: "var(--font-sans)" }}>
                <span className="text-xs tracking-[0.15em] uppercase text-amber-100 group-hover:text-white transition-colors">
                  {cat.name}
                </span>
                <span className="text-amber-400 text-xs">({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Books ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-amber-700 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                Curated Selection
              </p>
              <h2 className="text-5xl lg:text-6xl font-light text-stone-900" style={{ fontFamily: "var(--font-serif)" }}>
                Essential Books
              </h2>
            </div>
            <Link href="/books" className="hidden md:inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-stone-500 hover:text-amber-700 transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
              View All <span className="w-8 h-px bg-current inline-block" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book, i) => (
              <Link href="/books" key={book.id} className="group cursor-pointer">
                <div className={`${book.accent} aspect-[3/4] flex items-end p-8 mb-6 relative overflow-hidden`}>
                  <div className="absolute top-8 left-8 right-8 bottom-8 border border-stone-200 group-hover:border-amber-300 transition-colors duration-500" />
                  <div className="absolute top-12 left-12 right-12 bottom-12 border border-stone-100 group-hover:border-amber-200 transition-colors duration-500" />
                  <div className="relative z-10">
                    <span className="text-xs tracking-[0.15em] uppercase text-stone-400 block mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      {book.category}
                    </span>
                    <h3 className="text-2xl font-light text-stone-800 leading-tight group-hover:text-amber-800 transition-colors duration-300" style={{ fontFamily: "var(--font-serif)" }}>
                      {book.title}
                    </h3>
                  </div>
                  <div className="absolute top-8 right-8 text-7xl font-light text-stone-200 leading-none" style={{ fontFamily: "var(--font-serif)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs text-stone-500 tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
                      by {book.author}
                    </p>
                    <span className="text-lg font-light text-amber-700" style={{ fontFamily: "var(--font-serif)" }}>
                      {book.price}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                    {book.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-amber-700 group-hover:gap-4 transition-all duration-300" style={{ fontFamily: "var(--font-sans)" }}>
                    View Book <span className="w-4 h-px bg-amber-700 inline-block" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial / About ── */}
      <section id="about" className="py-28 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-stone-200 aspect-square flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-[120px] lg:text-[160px] leading-none font-light text-stone-300" style={{ fontFamily: "var(--font-serif)" }}>
                    &ldquo;
                  </div>
                  <p className="text-2xl lg:text-3xl font-light italic text-stone-600 -mt-8 leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                    The difference between a good pastry chef and a great one is measured in grams.
                  </p>
                  <div className="mt-8 w-16 h-px bg-amber-700 mx-auto" />
                  <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mt-4" style={{ fontFamily: "var(--font-sans)" }}>
                    PastryCrafted Philosophy
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-300 -z-10" />
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-amber-700 mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                Our Story
              </p>
              <h2 className="text-5xl font-light text-stone-900 mb-8 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Precision, <em className="italic">Patience,</em> and the Perfect Crumb.
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                PastryCrafted was born from a simple belief: that the best pastries in the world
                should be achievable in your kitchen. Not with shortcuts — but with knowledge.
              </p>
              <p className="text-stone-600 leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
                We curate the finest pastry literature and develop recipes tested obsessively until
                they are worthy of sharing. Every book in our collection is one we would have on
                our own shelf.
              </p>
              <Link href="#" className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-stone-900 hover:text-amber-700 transition-colors group" style={{ fontFamily: "var(--font-sans)" }}>
                Read Our Story
                <span className="w-10 h-px bg-current inline-block group-hover:w-16 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Recipes ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-amber-700 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                From Our Kitchen
              </p>
              <h2 className="text-5xl lg:text-6xl font-light text-stone-900" style={{ fontFamily: "var(--font-serif)" }}>
                Signature Recipes
              </h2>
            </div>
            <Link href="/recipes" className="hidden md:inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-stone-500 hover:text-amber-700 transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
              All Recipes <span className="w-8 h-px bg-current inline-block" />
            </Link>
          </div>

          <div className="divide-y divide-stone-100">
            {featuredRecipes.map((recipe, i) => (
              <Link href="/recipes" key={recipe.id} className="group flex items-center justify-between py-8 hover:bg-stone-50 -mx-6 px-6 transition-colors duration-200">
                <div className="flex items-center gap-8">
                  <span className="text-3xl font-light text-stone-200 w-10 text-right leading-none" style={{ fontFamily: "var(--font-serif)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-light text-stone-900 group-hover:text-amber-700 transition-colors mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-stone-500 hidden md:block" style={{ fontFamily: "var(--font-sans)" }}>
                      {recipe.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <div className="hidden lg:block text-right">
                    <p className="text-xs text-stone-400 tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
                      {recipe.origin}
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1">
                    <span className="text-xs tracking-wide text-stone-400 px-3 py-1 border border-stone-200 group-hover:border-amber-300 transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
                      {recipe.level}
                    </span>
                    <span className="text-xs text-stone-400" style={{ fontFamily: "var(--font-sans)" }}>
                      {recipe.time}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-stone-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-28 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-500 mb-8" style={{ fontFamily: "var(--font-sans)" }}>
            Become a Member
          </p>
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Unlock the Full
            <br />
            <em className="italic text-amber-400">Pastry Library.</em>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            Get unlimited access to 180+ recipes, exclusive member books, video masterclasses,
            and a community of serious bakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books" className="px-12 py-4 bg-amber-700 text-white text-xs tracking-[0.2em] uppercase hover:bg-amber-600 transition-colors duration-300" style={{ fontFamily: "var(--font-sans)" }}>
              Shop Books
            </Link>
            <Link href="/recipes" className="px-12 py-4 border border-stone-700 text-stone-300 text-xs tracking-[0.2em] uppercase hover:border-amber-600 hover:text-amber-400 transition-colors duration-300" style={{ fontFamily: "var(--font-sans)" }}>
              Browse Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-amber-700 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Trusted By
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-stone-900" style={{ fontFamily: "var(--font-serif)" }}>
              From Our Community
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The croissant recipe alone is worth the price of the book. I've been baking for 15 years and this changed everything.",
                author: "Sarah M.",
                title: "Professional Baker, London",
              },
              {
                quote: "Finally, a pastry resource that treats home bakers as intelligent adults. No shortcuts. Just real technique.",
                author: "Laurent D.",
                title: "Culinary Student, Paris",
              },
              {
                quote: "I received The Art of French Pastry as a gift and have made every single recipe. Extraordinary.",
                author: "Emma K.",
                title: "Home Baker, New York",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 border border-amber-100">
                <div className="text-5xl font-light text-amber-300 mb-4 leading-none" style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;
                </div>
                <p className="text-stone-700 leading-relaxed mb-8 italic text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                  {t.quote}
                </p>
                <p className="text-sm font-medium text-stone-900" style={{ fontFamily: "var(--font-sans)" }}>
                  {t.author}
                </p>
                <p className="text-xs text-stone-500 tracking-wide mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                  {t.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
