import { PageData } from 'lume/core.ts';

export default function ({ comp, p }: PageData & { p: PageData }) {
  return (
    <section class="post-list">
      <header class="post-list-header">
        <h2 class="post-list-title">
          <a href={p.data.url}>{p.data.menu}</a>
        </h2>
      </header>
      {p.data.items &&
        Object.values(p.data.items)
          .slice(0, 3)
          .map((item) => <comp.Post post={item} />)}

      <br />
      <button class="button">
        <a href={p.data.url}>More {p.data.menu}</a>
      </button>
      <hr />
    </section>
  );
}
