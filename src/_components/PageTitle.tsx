export default function ({ site_name }: { site_name: string }) {
  return (
    <a href="/" class="navbar-home">
      {site_name}
    </a>
  );
}
