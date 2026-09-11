export type HeritageSite = {
  slug: string;
  name: string;
  location: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
};

export const heritageSites: HeritageSite[] = [
  {
    slug: "hundred-islands",
    name: "Alaminos' Hundred Islands",
    location: "Alaminos City, Pangasinan",
    category: "Natural Heritage",
    description:
      "A landmark island cluster known for limestone formations, clear coastal waters, and community-based tourism experiences.",
    highlights: ["Island hopping", "View decks", "Local tourism guides"],
    image: "/hundred-islands.jpg",
    alt: "Illustration of limestone islands and blue coastal water"
  },
  {
    slug: "bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    category: "Built Heritage",
    description:
      "A historic coastal landmark that represents Pangasinan's maritime character and scenic western shoreline.",
    highlights: ["Historic landmark", "Coastal viewpoint", "Sunset visits"],
    image: "/bolinao-lighthouse.jpg",
    alt: "Illustration of a lighthouse on a coastal hill"
  },
  {
    slug: "balungao-hot-spring",
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    category: "Natural Heritage",
    description:
      "A nature-based destination associated with warm spring pools, mountain scenery, and outdoor recreation near Mount Balungao.",
    highlights: ["Warm spring pools", "Mountain scenery", "Outdoor recreation"],
    image: "/balungao-hot-spring.jpg",
    alt: "Illustration of warm spring pools with a mountain landscape"
  },
  {
    slug: "coastal-heritage",
    name: "Bolinao Coastal Heritage",
    location: "Bolinao, Pangasinan",
    category: "Cultural Landscape",
    description:
      "A curated showcase of coastal places, local stories, and visitor practices that support responsible tourism.",
    highlights: ["Local stories", "Responsible tourism", "Coastal scenery"],
    image: "/coastal-heritage.jpg",
    alt: "Illustration of a coastal heritage landscape"
  }
];
