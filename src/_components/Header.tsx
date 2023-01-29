import { PageData } from 'lume/core.ts';

export default function ({ comp, site_name, ...rest }: PageData) {
  // console.log(rest);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25rem',
        padding: '32px 100px 32px 100px',
        'box-shadow': 'inset 0px -40px 250px rgba(0, 0, 0, 0.25)',

        background: '#282E28',
        borderBottom: 'lime 4px solid',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <comp.PageTitle site_name={site_name} />
        <comp.Navigation {...rest} />
      </div>
    </div>
  );
}
