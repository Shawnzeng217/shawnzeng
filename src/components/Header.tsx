import Link from "next/link";

const categories = [
  { name: "About Shawn", path: "/about" },
  { name: "China", path: "/category/china" },
  { name: "Food", path: "/category/food" },
  { name: "Harvard", path: "/category/harvard" },
  { name: "Tech", path: "/category/tech" },
  { name: "Other Writings", path: "/writing-profiles" },
];

export default function Header() {
  return (
    <header className="border-b px-4 md:px-12 py-12 flex flex-col items-center">
      <Link href="/" className="text-4xl font-bold tracking-tight mb-8 font-serif text-black hover:opacity-80 transition-opacity">
        Shawn Zeng
      </Link>
      <nav className="flex flex-wrap justify-center gap-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-widest text-gray-600 hover:text-black transition-colors">
          Home
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.path}
            href={cat.path}
            className="text-sm font-semibold uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
