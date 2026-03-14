import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

export async function getSortedPostsData() {
  const allFiles = getAllFiles(postsDirectory);
  const markdownFiles = allFiles.filter(file => file.endsWith('.md'));

  const allPostsData = await Promise.all(markdownFiles.map(async (fullPath) => {
    const id = path.basename(fullPath).replace(/\.md$/, '');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string; category: string; excerpt: string; author: string }),
    };
  }));

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const allFiles = getAllFiles(postsDirectory);
  const fullPath = allFiles.find(file => path.basename(file) === `${id}.md`);

  if (!fullPath) {
    throw new Error(`Post with id ${id} not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; category: string; author: string }),
  };
}

