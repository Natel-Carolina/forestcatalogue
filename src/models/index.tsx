import { PageData } from 'lume/core.ts';

export default function ({ items }: PageData) {
  return (
    <>
      {Object.values(items).map((item: any) => {
        return (
          <>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p style={{ gap: '4px', display: 'flex' }}>
              Links: {item.ext_url ? <a href={item.ext_url}>website</a> : null}
              {item.github_repo ? <a href={item.github_repo}>github</a> : null}
            </p>
            {item.tags ? (
              <p style={{ gap: '4px', display: 'flex' }}>
                Tags:{' '}
                {item.tags.map((tag: any) => (
                  <span>{tag}</span>
                ))}
              </p>
            ) : null}
          </>
        );
      })}
    </>
  );
}
