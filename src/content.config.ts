import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const changeItem = z.object({
  title: z.string().optional(),
  body: z.string(),
  pr: z.number().optional(),
});

const changelog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/changelog" }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    type: z.enum(["major", "minor", "patch"]),
    title: z.string(),
    illustration: z.enum(["region-map", "policy-hexagon"]).optional(),
    contributors: z.number().optional(),
    authors: z
      .array(
        z.object({
          initials: z.string(),
          primary: z.boolean().optional(),
        }),
      )
      .optional(),
    authorsLine: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),
    changes: z
      .object({
        new: z.array(changeItem).optional(),
        improvements: z.array(changeItem).optional(),
        fixes: z.array(changeItem).optional(),
      })
      .optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(["engineering", "product", "company", "tutorial"]),
    author: z.object({
      name: z.string(),
      role: z.string(),
      initials: z.string(),
    }),
    readingTime: z.string(),
    cover: z
      .enum([
        "region-map",
        "policy-hexagon",
        "p95-ring",
        "traffic-line-chart",
        "iso-postgres",
        "iso-types",
        "iso-pulse",
        "iso-deploy",
      ])
      .optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { changelog, blog };
