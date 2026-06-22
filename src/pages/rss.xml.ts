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
    title: "Huaixuov0",
    description: "Huaixuov0 的技术博客",
    site: context.site || "https://your-blog.vercel.app",
    items,
    customData: `<language>zh-CN</language>`,
  });
};
