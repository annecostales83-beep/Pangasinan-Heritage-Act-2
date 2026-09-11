import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { heritageSites } from "@/data/sites";
import { HeritageImage } from "@/components/atoms/HeritageImage";

export const dynamicParams = false;
export function generateStaticParams() { return heritageSites.map((site) => ({ slug: site.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const site = heritageSites.find((item) => item.slug === params.slug);
  return site ? { title: `${site.name} | Pangasinan Heritage Digital Showcase`, description: site.description } : { title: "Heritage Site | Pangasinan Heritage Digital Showcase" };
}
export default function SitePage({ params }: { params: { slug: string } }) {
  const site = heritageSites.find((item) => item.slug === params.slug);
  if (!site) notFound();
  return <><a className="skip-link" href="#main-content">Skip to main content</a><main id="main-content" className="site-detail"><div className="container narrow"><Link className="back-link" href="/#sites">&larr; Back to heritage sites</Link><div className="detail-grid"><div className="detail-intro"><p className="eyebrow">{site.category}</p><h1>{site.name}</h1><p className="detail-location">{site.location}</p></div><HeritageImage src={site.image} alt={site.alt} className="detail-image" eager /><div className="detail-content"><p className="detail-copy">{site.description}</p><h2>Visitor highlights</h2><ul className="highlight-list">{site.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></div></div></main></>;
}
