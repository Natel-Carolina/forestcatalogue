import { PageData } from 'lume/core.ts';

export default function ({ comp, site_name, ...rest }: PageData) {
  return (
    <nav class="navbar">
      <comp.PageTitle site_name={site_name} />
      <comp.Navigation {...rest} />
    </nav>
  );
}
