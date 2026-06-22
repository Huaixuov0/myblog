import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");

  const data = posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((post) => ({
      title: post.data.title,
      slug: post.slug,
      date: post.data.date.toISOString(),
      excerpt: post.data.excerpt || "",
      tags: post.data.tags || [],
    }));

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};
