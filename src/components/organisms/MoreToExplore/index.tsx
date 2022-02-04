import React from "react";

import ExploreCard from "@/components/atoms/ExploreCard";
import { H3 } from "@/components/atoms/Typography";

type MoreToExploreProps = {
  className?: string;
};

const explores = [
  {
    title: "12 incredible hikes for hiking-obsessed families.",
    href: "/",
    imgSrc: "sea-sight.jpg",
    alt: "Two people looking at the sea from a cliff",
  },
  {
    title:
      "Ice cream, zoo time, and the beach—the best weekend in San Diego ever",
    href: "/",
    imgSrc: "ice-cream-sandwich.jpg",
    alt: "An ice-cream sandwich with sprinkles",
  },
  {
    title: "21 film and TV locations you can actually visit",
    href: "/",
    imgSrc: "horse-back-riding.jpg",
    alt: "People riding horse-back in meadow",
  },
];

const MoreToExplore: React.FC<MoreToExploreProps> = ({ className = "" }) => {
 
  return (
    <div className={`bg-pink-100 p-4 rounded-md h-auto w-full ${className}`}>
      <H3>More to Explore</H3>
      <div className="container mx-auto mt-2 grid grid-cols-3 gap-3">
        {explores.map(({ title, href, imgSrc, alt }) => (
          <ExploreCard
            key={imgSrc}
            title={title}
            href={href}
            imgSrc={imgSrc}
            alt={alt}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreToExplore;
