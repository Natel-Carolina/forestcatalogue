// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date().optional(),
      description: z.string().optional(),
      author: z.string().optional(),
      tags: z.array(z.string()).optional(),
      ext_url: z.string().optional(),
      github_repo: z.string().optional(),
      img: image().optional(),
      license: z.string().optional(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  datasets: postsCollection,
  tools: postsCollection,
  ["other-resources"]: postsCollection,
  models: postsCollection,
  blog: postsCollection,
};
