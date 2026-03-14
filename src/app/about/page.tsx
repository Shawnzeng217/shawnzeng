import { getPageData } from "@/lib/posts";

export default async function About() {
  const pageData = await getPageData("about");

  return (
    <article className="flex flex-col gap-8">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">{pageData.title}</h1>
      <div 
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: pageData.contentHtml }}
      />
    </article>
  );
}
