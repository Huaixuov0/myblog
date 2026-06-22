import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional().default([]),
    excerpt: z.string().optional().default(""),
    readingTime: z.string().optional().default("5 min"),
  }),
});

export const collections = { blog };
