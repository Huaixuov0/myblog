import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");

  const items = posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((post) => ({
      title: post.data.title,
      description: post.data.excerpt || post.data.title,
      link: `/blog/${post.slug}`,
      pubDate: post.data.date,
      categories: post.data.tags || [],
    }));

  return rss({
    title: "一号博客",
    description: "一号主人的技术博客 - 信息安全、Web开发与更多",
    site: context.site || "https://your-blog.vercel.app",
    items,
    customData: `<language>zh-CN</language>`,
  });
};
