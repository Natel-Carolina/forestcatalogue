import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allDatasets = await getCollection('datasets');
  const allModels = await getCollection('models');
  const allResources = await getCollection('other-resources');
  const allTools = await getCollection('tools');
  const posts = [...allDatasets, ...allModels, ...allResources, ...allTools];
  return rss({
    title: 'Forest Catalog',
    description: 'A collection of resources for working with forest data',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate ?? new Date(),
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
