# Shawn Zeng Clone (Next.js)

This is a clean, deployable Next.js repository that replicates the structure and aesthetic of `shawnzeng.com`.

## Features
- **Next.js App Router:** High-performance, SEO-friendly architecture.
- **Tailwind CSS:** Modern styling based on the original Ixion theme.
- **Markdown-Driven Content:** Easily manage your blog posts by adding `.md` files to the `/posts` directory.
- **Vercel Ready:** Optimized for one-click deployment to Vercel.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Add Content:**
   Create a new `.md` file in the `/posts` directory with the following frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   category: "Category Name"
   author: "Your Name"
   excerpt: "A short summary of your post."
   ---
   Your post content goes here...
   ```

## Deployment

Simply push this repository to GitHub and link it to your [Vercel](https://vercel.com) account. It will automatically detect the Next.js framework and deploy your site.
