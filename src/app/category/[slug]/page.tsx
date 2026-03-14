import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { format } from "date-fns";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${categoryName} | Shawn Zeng`,
  };
}

export default async function Category(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const allPostsData = await getSortedPostsData();
  const categoryPosts = allPostsData.filter(
    (post) => post.category.toLowerCase() === params.slug.toLowerCase()
  );

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-bold border-b pb-4 uppercase tracking-widest text-gray-500 mb-8">
        Category: <span className="text-[--classical-gold]">{params.slug}</span>
      </h1>
      <div className="flex flex-col gap-0">
        {categoryPosts.length > 0 ? (
          categoryPosts.map(({ id, date, title, category, author, excerpt }) => (
            <article key={id} className="border-b py-16 flex flex-col gap-4 first:pt-0">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                <time dateTime={date}>{format(new Date(date), "MMMM d, yyyy")}</time>
                <span>&bull;</span>
                <span>{author}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight hover:opacity-80 transition-opacity">
                <Link href={`/posts/${id}`}>{title}</Link>
              </h2>
              <p className="text-gray-600 leading-relaxed italic">{excerpt}</p>
              <Link href={`/posts/${id}`} className="text-sm font-bold uppercase tracking-widest text-black hover:opacity-70 flex items-center gap-1">
                Continue reading <span>&rarr;</span>
              </Link>
            </article>
          ))
        ) : (
          <p className="text-gray-500 italic">No posts found in this category.</p>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  const categories = Array.from(new Set(posts.map((post) => post.category.toLowerCase())));
  return categories.map((slug) => ({
    slug,
  }));
}
