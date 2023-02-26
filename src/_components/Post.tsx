import { PageData } from 'lume/core.ts';

export default function ({ search, post }: PageData & { post: PageData }) {
  return (
    <article class="post">
      <header class="post-header">
        <h3 class="post-title">{post.name}</h3>
      </header>

      <div class="post-excerpt body">{post.description}</div>

      <div class="post-details">
        {post.ext_url ? (
          <p>
            <a href={post.ext_url}>Visit website</a>
          </p>
        ) : null}
        {post.github_repo ? (
          <p>
            <a href={post.github_repo}>View on github</a>
          </p>
        ) : null}
        {post.tags ? (
          <div class="post-tags">
            {post.tags.map((tag) => {
              const tagPage = search.page("type=tag tag='" + tag + "'");
              return (
                <a
                  data-pagefind-filter="filter"
                  class="badge"
                  href={tagPage?.data.url}
                >
                  {tag}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </article>
  );
}
