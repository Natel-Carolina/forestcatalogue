import { PageData } from 'lume/core.ts';

export default function ({ comp, search }: PageData) {
  const pages = search.pages('menu!=undefined url!=/'); //'url^=/', undefined, 3);

  return (
    <>
      {pages.map((p) => {
        return (
          <>
            <h2>{p.data.menu}</h2>
            {Object.values(p.data.items)
              .slice(0, 3)
              .map((item: any) => (
                <>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p style={{ gap: '4px', display: 'flex' }}>
                    Links:{' '}
                    {item.ext_url ? <a href={item.ext_url}>website</a> : null}
                    {item.github_repo ? (
                      <a href={item.github_repo}>github</a>
                    ) : null}
                  </p>
                  {item.tags ? (
                    <p style={{ gap: '4px', display: 'flex' }}>
                      Tags:{' '}
                      {item.tags.map((tag: any) => (
                        <span>{tag}</span>
                      ))}
                    </p>
                  ) : null}
                  <p>
                    <button>
                      <a href={p.data.url}>View more</a>
                    </button>
                  </p>
                </>
              ))}
          </>
        );
        // {p.data?.url}</div>;
        // <comp.PagePreview />
      })}
    </>
  );
}
