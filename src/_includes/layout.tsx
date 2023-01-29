import type { PageData } from 'lume/core.ts';

const Layout = (pd: PageData) => {
  return (
    <html lang="en">
      <head>
        <title>{pd.title}</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
      </head>
      <body
        style={{
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          fontFamily: "'Poppins', sans-serif",
          minHeight: '100vh',
        }}
      >
        {pd.hero === false ? (
          <pd.comp.Header {...pd} />
        ) : (
          <pd.comp.Hero {...pd} />
        )}
        <pd.comp.PageContainer>{pd.children}</pd.comp.PageContainer>
        <pd.comp.Footer />
      </body>
    </html>
  );
};

export default Layout;
