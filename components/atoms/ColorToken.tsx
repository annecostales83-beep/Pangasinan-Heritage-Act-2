type ColorTokenProps = { name: string; value: string };

export function ColorToken({ name, value }: ColorTokenProps) {
  return (
    <span className="color-token">
      <span className="color-swatch" style={{ backgroundColor: value }} aria-hidden="true" />
      <span>{name}</span>
    </span>
  );
}