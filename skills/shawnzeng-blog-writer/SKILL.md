---
name: shawnzeng-blog-writer
description: Expert guide for writing and formatting bilingual blog posts for Shawn Zeng's personal site. Use this skill whenever generating or editing content for the /posts directory.
---

# Shawn Zeng Blog Writing Standard

Use this skill to ensure all blog posts are professionally formatted, SEO-friendly, and compatible with the Next.js + Vercel pipeline.

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
- **Naming**: Use lowercase letters and hyphens ONLY. No spaces. No special characters.
- **Example**: `posts/AI/cloudflare-crawl-api.md`

## 3. Content Requirements
- **Tone**: Professional, insightful, tech-forward, yet accessible.
- **Bilingualism**:
    - Preferred: Section-by-section bilingual content (EN then CN).
    - Minimum: Bilingual `excerpt` and bilingual headings.
- **Structure**:
    1. **Definition**: What is this tool/topic?
    2. **Deep Dive**: Why does it matter? (Features, Significance).
    3. **Implementation**: Code snippets, CLI commands, or step-by-step guides.
    4. **Conclusion**: Final takeaway.

## 4. Technical Constraints
- **No Duplicate Titles**: Do NOT include a `# H1` in the body if it's already in the frontmatter. The system strips the first H1 automatically.
- **Image Support**: Use standard Markdown syntax `![Alt](path)`.
- **Code & Prompts**: All code snippets, CLI commands, and AI Prompts MUST be wrapped in triple backtick code blocks (e.g., \` ```bash \` or \` ```text \`). This ensures they are rendered with a "Copy" button for the user.
- **Horizontal Rules**: Use `---` for section separators. The system is styled to provide consistent vertical spacing around them.

## 5. Deployment Workflow
After writing, ensure the file is committed and pushed to GitHub. Vercel will handle the rest.
