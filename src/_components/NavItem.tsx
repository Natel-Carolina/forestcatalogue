export default function ({
  url,
  label,
  isActive,
}: {
  url: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <li>
      <a href={url} aria-current={isActive ? 'page' : ''}>
        {label}
      </a>
    </li>
  );
}
