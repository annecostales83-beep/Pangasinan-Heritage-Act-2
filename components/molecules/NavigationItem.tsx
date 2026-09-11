import Link from "next/link";

type NavigationItemProps = { href: string; children: React.ReactNode };

export function NavigationItem({ href, children }: NavigationItemProps) {
  return <Link className="nav-item" href={href}>{children}</Link>;
}