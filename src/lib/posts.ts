import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
const contentDirectory = path.join(process.cwd(), 'content');

export async function getPageData(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string }),
  };
}

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

    // Get the immediate parent folder name
    const relativePath = path.relative(postsDirectory, fullPath);
    const pathParts = relativePath.split(path.sep);
    
    // If the file is in a subdirectory, use that folder name as category
    // Otherwise, use the category from frontmatter or 'Uncategorized'
    const folderCategory = pathParts.length > 1 ? pathParts[0] : null;
    const category = folderCategory || matterResult.data.category || 'Uncategorized';

    return {
      id,
      ...(matterResult.data as { date: string; title: string; excerpt: string; author: string }),
      category,
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

  // Get the immediate parent folder name
  const relativePath = path.relative(postsDirectory, fullPath);
  const pathParts = relativePath.split(path.sep);
  const folderCategory = pathParts.length > 1 ? pathParts[0] : null;
  const category = folderCategory || matterResult.data.category || 'Uncategorized';

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; author: string }),
    category,
  };
}

