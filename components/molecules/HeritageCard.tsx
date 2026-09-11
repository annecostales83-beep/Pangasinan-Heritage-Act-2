import Link from "next/link";
import { HeritageImage } from "@/components/atoms/HeritageImage";
import type { HeritageSite } from "@/data/sites";

export function HeritageCard({ site }: { site: HeritageSite }) {
  return (
    <article className="heritage-card">
      <HeritageImage src={site.image} alt={site.alt} />
      <div className="card-body">
        <p className="card-category">{site.category}</p>
        <h3>{site.name}</h3>
        <p className="card-location">{site.location}</p>
        <p>{site.description}</p>
        <Link className="text-link" href={`/site/${site.slug}`}>
          Explore site <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}