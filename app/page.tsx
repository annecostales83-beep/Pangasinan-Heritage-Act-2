import Link from "next/link";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";
import { HeritageGrid } from "@/components/organisms/HeritageGrid";
import { SectionHeading } from "@/components/atoms/Typography";
import { HeritageImage } from "@/components/atoms/HeritageImage";
import { heritageSites } from "@/data/sites";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <HeaderNavigation />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">PANGASINAN PROVINCIAL TOURISM</p>
              <h1 id="hero-title">Stories, places, and heritage worth discovering.</h1>
              <p className="hero-copy">
                Explore selected cultural and natural landmarks through a fast,
                mobile-first digital showcase designed for visitors with limited mobile data.
              </p>
              <Link className="button button-primary hero-cta" href="#sites">
                Explore heritage sites
              </Link>
            </div>

            <div className="hero-art">
              <HeritageImage
                src="/hundred-islands.jpg"
                alt="Stylized illustration of Pangasinan islands"
                className="hero-image"
                eager
              />
            </div>
          </div>
        </section>

        <section className="section" id="sites" aria-labelledby="sites-heading">
          <div className="container">
            <div id="sites-heading">
              <SectionHeading eyebrow="EXPLORE">Featured heritage sites</SectionHeading>
            </div>
            <HeritageGrid sites={heritageSites} />
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-heading">
          <div className="container narrow">
            <div id="about-heading">
              <SectionHeading eyebrow="WHY THIS SHOWCASE">Built for real-world access</SectionHeading>
            </div>
            <p>
              Pages are statically generated, images are lightweight local SVG assets, content is
              componentized, and the layout uses semantic HTML and keyboard-friendly controls.
              The structure is modular so future heritage stories can be added without rebuilding
              the interface.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <strong>Pangasinan Heritage Digital Showcase</strong>
          <span>Built as a lightweight static web experience.</span>
        </div>
      </footer>
    </>
  );
}
