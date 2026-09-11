import { withBasePath } from "@/lib/basePath";

type HeritageImageProps = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export function HeritageImage({
  src,
  alt,
  className = "",
  eager = false
}: HeritageImageProps) {
  return (
    <img
      src={withBasePath(src)}
      alt={alt}
      className={`heritage-image ${className}`.trim()}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
