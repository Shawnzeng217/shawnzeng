import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { format } from "date-fns";

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <div className="flex flex-col gap-0">
      {allPostsData.map(({ id, date, title, category, author, excerpt }) => (
        <article key={id} className="border-b py-16 flex flex-col gap-4 first:pt-0">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
            <time dateTime={date}>{format(new Date(date), "MMMM d, yyyy")}</time>
            <span>&bull;</span>
            <span>{author}</span>
            <span>&bull;</span>
            <Link href={`/category/${category.toLowerCase()}`} className="text-[--classical-gold] hover:underline transition-all">
              {category}
            </Link>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight hover:opacity-80 transition-opacity">
            <Link href={`/posts/${id}`}>{title}</Link>
          </h2>
          <p className="text-gray-600 leading-relaxed italic">{excerpt}</p>
          <Link href={`/posts/${id}`} className="text-sm font-bold uppercase tracking-widest text-black hover:opacity-70 transition-opacity flex items-center gap-1">
            Continue reading <span>&rarr;</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
