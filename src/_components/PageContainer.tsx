import { PageData } from 'lume/core.ts';

export default function ({ children }: PageData) {
  return (
    <div style={{ background: 'darkgreen', flexGrow: '1', padding: '64px 0' }}>
      {' '}
      <div style={{ maxWidth: '640px', margin: 'auto' }}>{children}</div>
    </div>
  );
}
