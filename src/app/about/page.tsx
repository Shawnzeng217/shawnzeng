import { getPageData } from "@/lib/posts";
import { Metadata } from "next";
import MarkdownContent from "@/components/MarkdownContent";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData("about");
  return {
    title: `${pageData.title} | Shawn Zeng`,
  };
}

export default async function About() {
  const pageData = await getPageData("about");

  return (
    <article className="flex flex-col gap-8 overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">{pageData.title}</h1>
      <MarkdownContent html={pageData.contentHtml} />
    </article>
  );
}
