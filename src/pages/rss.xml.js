import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import dayjs from "dayjs";

export async function GET(context) {
  const allDatasets = await getCollection("datasets");
  const allModels = await getCollection("models");
  const allResources = await getCollection("other-resources");
  const allTools = await getCollection("tools");
  const allPosts = await getCollection("blog");
  const posts = [
    ...allDatasets,
    ...allModels,
    ...allResources,
    ...allTools,
    ...allPosts,
  ];

  const items = await Promise.all(
    posts.map(async (post) => {
      const { remarkPluginFrontmatter } = await post.render();

      const publicationDate = remarkPluginFrontmatter?.pubDate
        ? dayjs(remarkPluginFrontmatter?.pubDate).toString()
        : null;

      return {
        title: post.data.title,
        pubDate: publicationDate,
        description: post.data.description,
        link: `${context.site.pathname}/${post.collection}/${post.slug}/`,
      };
    }),
  );
  const sortedItems = items.sort((itemA, itemB) =>
    dayjs(itemA.pubDate).isAfter(dayjs(itemB.pubDate))
      ? -1
      : dayjs(itemA.pubDate).isBefore(dayjs(itemB.pubDate))
      ? 1
      : 0,
  );

  return rss({
    title: "Forest Catalog",
    description: "A collection of resources for working with forest data",
    site: context.site.href,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    items: sortedItems,
    customData: `<language>en-us</language><atom:link href="${context.site}/rss.xml" rel="self" type="application/rss+xml" />`,
    stylesheet: "./rss/styles.xsl",
  });
}
