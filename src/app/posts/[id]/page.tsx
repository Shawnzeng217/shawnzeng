import { getPostData, getSortedPostsData } from "@/lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const postData = await getPostData(params.id);
  return {
    title: `${postData.title} | Shawn Zeng`,
  };
}

export default async function Post(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const postData = await getPostData(params.id);

  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
          <time dateTime={postData.date}>{format(new Date(postData.date), "MMMM d, yyyy")}</time>
          <span>&bull;</span>
          <span>{postData.author}</span>
          <span>&bull;</span>
          <Link href={`/category/${postData.category.toLowerCase()}`} className="text-[--classical-gold] hover:underline transition-all">
            {postData.category}
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">{postData.title}</h1>
      </header>
      <div
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}
