---
name: shawnzeng-blog-writer
description: Expert guide for writing and formatting bilingual blog posts for Shawn Zeng's personal site. Use this skill whenever generating or editing content for the /posts directory.
---

# Shawn Zeng Blog Writing Standard (v2.0)

Use this skill to ensure all blog posts are professionally formatted, mobile-responsive, and compatible with the Next.js + Vercel pipeline.

## 1. File Metadata (Frontmatter)
Every post MUST start with this block:
```markdown
---
title: "Clear, Actionable Title"
date: "YYYY-MM-DD"
category: "Subdirectory Name"
author: "Shawn Zeng"
excerpt: "A bilingual summary (1-2 sentences in EN/CN) for the list view."
---
```

## 2. File Naming & Location
- **Path**: `posts/<Category>/<filename>.md`
- **Naming**: Use lowercase letters and hyphens ONLY (e.g., `ai-transformation-guide.md`). No spaces or Chinese characters in filenames to avoid build errors.

## 3. Content Requirements
- **Tone**: Professional, insightful, tech-forward.
- **Bilingualism**:
    - Preferred: Section-by-section bilingual content (EN then CN).
    - Minimum: Bilingual `excerpt` and bilingual headings.
- **Mobile-First Design**:
    - Keep paragraphs concise for better readability on small screens.
    - Use clear heading hierarchies (H2, H3) to break up long text.

## 4. Technical Constraints
- **Typography**: 
    - Standard Body: `prose-base` (16px).
    - Headings: `text-2xl` to `text-4xl` range.
- **No Duplicate Titles**: Do NOT include a `# H1` in the body. The system renders the frontmatter title as the only H1.
- **Code & Prompts**: All code, CLI commands, and AI Prompts MUST be wrapped in triple backtick code blocks. This enables the **"Copy"** button functionality.
- **Horizontal Rules**: Use `---` for section separators. The system provides balanced `py-16` spacing around them.
- **Images**: Use `![Alt Text](path)` and ensure images are optimized for fast mobile loading.

## 5. Deployment Workflow
After writing, ensure the file is committed and pushed to GitHub. Verify the layout on both Desktop and Mobile views via the Vercel preview URL.
