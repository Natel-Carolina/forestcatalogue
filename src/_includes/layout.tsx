import type { PageData } from 'lume/core.ts';

const Layout = (pd: PageData) => {
  return (
    <html lang="en">
      <head>
        <title>{pd.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body>
        {pd.hero === false ? (
          <pd.comp.Header {...pd} />
        ) : (
          <pd.comp.Hero {...pd} />
        )}
        <pd.comp.PageContainer>{pd.children}</pd.comp.PageContainer>
        {/* <pd.comp.Footer /> */}
      </body>
    </html>
  );
};

export default Layout;
