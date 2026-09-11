type HeadingProps = { children: React.ReactNode; eyebrow?: string };

export function SectionHeading({ children, eyebrow }: HeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
    </div>
  );
}