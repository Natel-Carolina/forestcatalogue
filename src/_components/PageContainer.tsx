import { PageData } from 'lume/core.ts';

export default function ({ children }: PageData) {
  return <main class="page">{children}</main>;
}
