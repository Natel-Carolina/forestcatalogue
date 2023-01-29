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
    <a
      href={url}
      style={{
        color: `${isActive ? 'white' : 'lightgrey'}`,
        textDecoration: `${isActive ? 'underline' : 'none'}`,
      }}
    >
      {label}
    </a>
  );
}
