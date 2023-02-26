import { PageData } from 'lume/core.ts';

export default function ({ comp, search, ...rest }: PageData) {
  const topLevelPages = search.pages('menu!=undefined url!=/');

  return (
    <ul class="navbar-links">
      {topLevelPages.map((ni) => (
        <comp.NavItem
          url={ni.data.url}
          label={ni.data.menu}
          isActive={ni.data.menu === rest.menu}
        />
      ))}
    </ul>
  );
}
