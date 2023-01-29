import { PageData } from 'lume/core.ts';

export default function ({ comp, search, ...rest }: PageData) {
  const topLevelPages = search.pages('menu!=undefined');

  // console.log(rest.menu);
  // console.log(rest);
  return (
    <div style={{ gap: '2rem', display: ' flex' }}>
      {topLevelPages.map((ni) => (
        <comp.NavItem
          url={ni.data.url}
          label={ni.data.menu}
          isActive={ni.data.menu === rest.menu}
        />
      ))}
    </div>
  );
}
