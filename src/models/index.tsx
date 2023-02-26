import { PageData } from 'lume/core.ts';

export default function ({ comp, menu, page }: PageData) {
  return (
    <>
      <header class="page-header">
        <h1 class="page-title">{menu}</h1>
      </header>

      <section class="post-list">
        {page.data.items &&
          Object.values(page.data.items)
            .slice(0, 3)
            .map((item) => <comp.Post post={item} />)}
      </section>
    </>
  );
}
