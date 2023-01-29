import { PageData } from 'lume/core.ts';

export default function ({ comp, site_name, ...rest }: PageData) {
  // console.log(rest);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25rem',
        padding: '32px 100px 120px 100px',
        background: 'url(nigel-tadyanehondo-RonhCA39VRw-unsplash.jpg), #282E28',
        'box-shadow': 'inset 0px -40px 250px rgba(0, 0, 0, 0.25)',

        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center',
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
      <div>
        <h1>A catalogue of resources for working with forest data</h1>
        <h2>
          Datasets, scritps, and papers to support researchers and engineers
        </h2>
      </div>
    </div>
  );
}
