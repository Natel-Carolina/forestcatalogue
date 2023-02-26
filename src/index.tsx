import { PageData } from 'lume/core.ts';

export default function ({ comp, search }: PageData) {
  const pages = search.pages('menu!=undefined url!=/');

  return (
    <>
      <header class="page-header">
        <h1 class="page-title">
          A catalogue of resources for working with forest data
        </h1>
        {/* <div class="search" id="search"></div> */}
      </header>

      {pages.map((p) => (
        <comp.PostList p={p} />
      ))}
    </>
  );
}
