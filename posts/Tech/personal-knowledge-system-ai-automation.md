---
title: "From Second Brain to Static Site: The Obsidian-GitHub-Vercel Workflow"
date: "2026-03-15"
category: "Tech"
author: "Shawn Zeng"
excerpt: "How I built a seamless, AI-powered publishing pipeline that turns personal Obsidian notes into a professional-grade website automatically. | 深度解析：如何利用 AI 自动化构建一套从 Obsidian 笔记到全球发布的高效工作流。"
---
## 1. The Vision / 愿景

**English:**
The goal was simple yet ambitious: to transform a private knowledge base (Obsidian) into a professional, public-facing website without manual coding or complex CMS management. By leveraging AI agents and modern cloud infrastructure, we've created a "zero-friction" publishing system.

**中文：**
我的目标既简单又充满野心：将私人的知识库（Obsidian）转化为一个专业的、面向公众的网站，而无需手动编写代码或管理复杂的 CMS 终端。通过利用 AI 智能体和现代云基础设施，我们构建了一套“零摩擦”的发布系统。

---

## 2. The Tech Stack / 技术栈

**English:**
- **Obsidian:** The "Second Brain" where content is captured and structured.
- **Next.js (App Router):** The modern React framework for high-performance rendering.
- **Tailwind CSS:** For professional, responsive typography and layout.
- **GitHub:** The version control hub and bridge between local and cloud.
- **Vercel:** The edge deployment platform that provides instant global delivery.
- **Gemini CLI (AI):** The orchestration layer that writes code, manages files, and automates Git.

**中文：**
- **Obsidian：** “第二大脑”，负责内容的捕获和结构化。
- **Next.js (App Router)：** 提供高性能渲染的现代 React 框架。
- **Tailwind CSS：** 负责专业且响应式的排版与布局。
- **GitHub：** 版本控制中心，连接本地与云端的桥梁。
- **Vercel：** 边缘部署平台，提供即时的全球内容分发。
- **Gemini CLI (AI)：** 编排层，负责编写代码、管理文件并自动化 Git 操作。

---

## 3. The Automated Workflow / 自动化流程

### Phase 1: Creation (Obsidian)
**English:** Using custom **Templater** scripts, new posts are created with dynamic metadata (title, date, category) based on their physical folder location.
**中文：** 使用自定义的 **Templater** 脚本，根据文件所在的物理文件夹位置，自动生成带有动态元数据（标题、日期、分类）的新博文。

### Phase 2: Sync (GitHub)
**English:** Upon saving, the **Obsidian Git** plugin automatically commits and pushes the Markdown files to a private GitHub repository.
**中文：** 在保存时，**Obsidian Git** 插件会自动将 Markdown 文件提交并推送到私有的 GitHub 仓库。

### Phase 3: Deployment (Vercel)
**English:** Vercel detects the `push` event, triggers a serverless build, parses the Markdown via `gray-matter`, and deploys the new static site in under 60 seconds.
**中文：** Vercel 检测到 `push` 事件，触发无服务器构建，通过 `gray-matter` 解析 Markdown，并在 60 秒内完成新静态站点的部署。

---

## 4. The Role of AI / AI 的角色

**English:**
In this project, the AI acts as a **Senior Software Engineer**. Instead of the user writing CSS or handling routing logic, the user provides the "intent," and the AI agent:
1. Crawls reference sites to replicate design patterns.
2. Writes the dynamic data fetching logic (`posts.ts`).
3. Refines and polishes content for a global audience.

**中文：**
在这个项目中，AI 扮演了 **高级软件工程师** 的角色。用户无需亲自编写 CSS 或处理路由逻辑，只需提供“意图”，AI 智能体便会：
1. 抓取参考网站以复制设计模式。
2. 编写动态数据获取逻辑（`posts.ts`）。
3. 为全球读者润色和优化内容。

---

## 5. Conclusion / 总结

**English:**
This workflow proves that personal knowledge management is no longer just about storage—it's about **flow**. When your notes can move from a local folder to a global URL with zero manual effort, you focus on what truly matters: **Thinking and Writing.**

**中文：**
这套工作流证明了个人知识管理不再仅仅关乎存储，更关乎**流动**。当你的笔记能够以零人工干预的方式从本地文件夹流向全球域名时，你就可以专注于真正重要的事情：**思考与创作。**
