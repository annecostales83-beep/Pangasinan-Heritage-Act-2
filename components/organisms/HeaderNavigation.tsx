import Link from "next/link";
import { NavigationItem } from "@/components/molecules/NavigationItem";

export function HeaderNavigation() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Pangasinan Heritage Showcase home">
          <span className="brand-mark" aria-hidden="true">PH</span>
          <span>
            <strong>Pangasinan</strong>
            <small>Heritage Showcase</small>
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <NavigationItem href="/">Home</NavigationItem>
          <NavigationItem href="/#sites">Heritage Sites</NavigationItem>
          <NavigationItem href="/#about">About</NavigationItem>
        </nav>
      </div>
    </header>
  );
}
