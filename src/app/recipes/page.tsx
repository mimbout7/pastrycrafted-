import Link from "next/link";

const recipes = [
  {
    id: 1,
    title: "Kouign-Amann",
    origin: "Brittany, France",
    time: "3 hrs",
    level: "Advanced",
    category: "Laminated",
    description: "Buttery, caramelized layers of laminated dough — a revelation in simplicity. The name translates as 'butter cake' and it earns every syllable.",
    tags: ["Butter", "Caramel", "Laminated"],
  },
  {
    id: 2,
    title: "Mille-Feuille",
    origin: "Paris, France",
    time: "4 hrs",
    level: "Advanced",
    category: "Puff Pastry",
    description: "Thousand paper-thin layers of puff pastry, vanilla cream, and fondant glaze. A test of patience and technique that rewards magnificently.",
    tags: ["Puff Pastry", "Vanilla", "Cream"],
  },
  {
    id: 3,
    title: "Tarte Tatin",
    origin: "Loire Valley",
    time: "1.5 hrs",
    level: "Intermediate",
    category: "Tarts",
    description: "The upside-down apple tart that conquered the world. Caramel, butter, perfection. A dish born from a happy accident.",
    tags: ["Apple", "Caramel", "French"],
  },
  {
    id: 4,
    title: "Paris-Brest",
    origin: "Paris, France",
    time: "2.5 hrs",
    level: "Intermediate",
    category: "Choux",
    description: "Choux pastry filled with praline cream — a cyclist's dessert turned Parisian icon. The wheel shape honors the Paris-Brest-Paris bicycle race.",
    tags: ["Choux", "Praline", "Cream Puff"],
  },
  {
    id: 5,
    title: "Croissant",
    origin: "Vienna / Paris",
    time: "16 hrs",
    level: "Expert",
    category: "Laminated",
    description: "The pinnacle of laminated dough. Dozens of paper-thin butter layers that shatter with the first bite. Mastering it changes everything.",
    tags: ["Laminated", "Butter", "Yeast"],
  },
  {
    id: 6,
    title: "Financiers",
    origin: "Paris, France",
    time: "45 min",
    level: "Beginner",
    category: "Small Cakes",
    description: "Brown butter, almond flour, and egg whites produce these elegant little cakes. Quick to make, impossible to forget.",
    tags: ["Brown Butter", "Almond", "Quick"],
  },
  {
    id: 7,
    title: "Opera Cake",
    origin: "Paris, France",
    time: "5 hrs",
    level: "Expert",
    category: "Layer Cakes",
    description: "Joconde sponge soaked in coffee syrup, layers of coffee buttercream and ganache — a masterpiece of French patisserie.",
    tags: ["Coffee", "Chocolate", "Buttercream"],
  },
  {
    id: 8,
    title: "Canelé de Bordeaux",
    origin: "Bordeaux, France",
    time: "2 hrs",
    level: "Intermediate",
    category: "Small Cakes",
    description: "A caramelized crust concealing a soft, custard-like interior infused with rum and vanilla. Mysterious and utterly addictive.",
    tags: ["Rum", "Vanilla", "Custard"],
  },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

const levelColors: Record<string, string> = {
  Beginner:     "text-emerald-600 border-emerald-200 bg-emerald-50",
  Intermediate: "text-amber-700 border-amber-200 bg-amber-50",
  Advanced:     "text-stone-700 border-stone-300 bg-stone-50",
  Expert:       "text-red-700 border-red-200 bg-red-50",
};

export default function RecipesPage() {
  return (
    <div className="pt-20">
      <section className="bg-stone-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-500 mb-6" style={{ fontFamily: "var(--font-sans)" }}>
            From Our Kitchen
          </p>
          <h1 className="text-6xl lg:text-8xl font-light text-white leading-[0.95] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Recipes
          </h1>
          <p className="text-stone-400 text-lg max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            Classic techniques, modern refinements. Every recipe tested until it is worthy of your kitchen.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-8 overflow-x-auto py-5">
            {levels.map((l) => (
              <button
                key={l}
                className={`text-xs tracking-[0.15em] uppercase whitespace-nowrap transition-colors pb-1 ${
                  l === "All"
                    ? "text-amber-700 border-b border-amber-700"
                    : "text-stone-500 hover:text-stone-900 border-b border-transparent"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recipes.map((recipe, i) => (
              <div key={recipe.id} className="group border border-stone-100 hover:border-amber-200 transition-colors duration-300 p-8 cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs tracking-[0.15em] uppercase text-stone-400 block mb-3" style={{ fontFamily: "var(--font-sans)" }}>
                      {recipe.category}
                    </span>
                    <h2 className="text-3xl font-light text-stone-900 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                      {recipe.title}
                    </h2>
                  </div>
                  <span className="text-5xl font-light text-stone-100 leading-none" style={{ fontFamily: "var(--font-serif)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                  {recipe.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="text-xs text-stone-400 tracking-wide px-3 py-1 border border-stone-100 bg-stone-50" style={{ fontFamily: "var(--font-sans)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xs text-stone-400 tracking-wide mb-1" style={{ fontFamily: "var(--font-sans)" }}>Origin</p>
                      <p className="text-xs text-stone-600" style={{ fontFamily: "var(--font-sans)" }}>{recipe.origin}</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 tracking-wide mb-1" style={{ fontFamily: "var(--font-sans)" }}>Time</p>
                      <p className="text-xs text-stone-600" style={{ fontFamily: "var(--font-sans)" }}>{recipe.time}</p>
                    </div>
                  </div>
                  <span className={`text-xs tracking-wide px-3 py-1 border ${levelColors[recipe.level]}`} style={{ fontFamily: "var(--font-sans)" }}>
                    {recipe.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-500 mb-6" style={{ fontFamily: "var(--font-sans)" }}>
            Member Exclusives
          </p>
          <h2 className="text-5xl font-light text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            150+ More Recipes Await.
          </h2>
          <p className="text-stone-400 leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
            Subscribe to unlock our full recipe archive — including video walkthroughs, technique breakdowns, and chef annotations.
          </p>
          <Link href="#newsletter" className="inline-flex items-center gap-4 px-12 py-4 bg-amber-700 text-white text-xs tracking-[0.2em] uppercase hover:bg-amber-600 transition-colors duration-300" style={{ fontFamily: "var(--font-sans)" }}>
            Unlock Access
          </Link>
        </div>
      </section>
    </div>
  );
}
