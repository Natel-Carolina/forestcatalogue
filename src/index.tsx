import { PageData } from 'lume/core.ts';

export default function ({ comp, search }: PageData) {
  const pages = search.pages('menu!=undefined url!=/'); //'url^=/', undefined, 3);

  return (
    <>
      <header class="page-header">
        <h1 class="page-title">
          A catalogue of resources for working with forest data
        </h1>

        {/* <div class="search" id="search"></div> */}
      </header>
      {pages.map((p) => {
        return (
          <section class="post-list">
            <header class="post-list-header">
              <h2 class="post-list-title">
                <a href={p.data.url}>{p.data.menu}</a>
              </h2>
            </header>
            {Object.values(p.data.items)
              .slice(0, 3)
              .map((item: any) => (
                <article class="post">
                  <header class="post-header">
                    <h3 class="post-title">{item.name}</h3>
                  </header>

                  <div class="post-excerpt body">{item.description}</div>

                  <div class="post-details">
                    {item.ext_url ? (
                      <p>
                        <a href={item.ext_url}>Visit website</a>
                      </p>
                    ) : null}
                    {item.github_repo ? (
                      <p>
                        <a href={item.github_repo}>View on github</a>
                      </p>
                    ) : null}
                    {item.tags ? (
                      <div class="post-tags">
                        {item.tags.map((tag: any) => {
                          const tagPage = search.page(
                            "type=tag tag='" + tag + "'"
                          );
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
              ))}
            <br />
            <button class="button">
              <a href={p.data.url}>More {p.data.menu}</a>
            </button>
            <hr />
          </section>
        );
        // {p.data?.url}</div>;
        // <comp.PagePreview />
      })}
    </>
  );
}
