import Link from "next/link";
import Image from "next/image";

import HeartIcon from "../../assets/icons/HeartIcon";
import { BodyText } from "../Typography";

type ExploreCardProps = {
  title: string;
  href: string;
  imgSrc: string;
  alt: string
};

const ExploreCard: React.FC<ExploreCardProps> = ({ title, href, imgSrc, alt }) => {
  return (
    <div className="relative min-h-explore-card max-w-explore-card bg-white grid gap-1.5">
      <Image src={`/images/${imgSrc}`} alt={alt} />
      <p className="font-medium text-center">
        From{" "}
        <Link href="/" >
          <a className="!hover:font-normal hover:underline">TripAdvisor</a>
        </Link>
      </p>
      <Link href={href}>
        <a>
        <BodyText className="text-lg font-medium text-center px-5">
          {title}
        </BodyText>
        </a>
      </Link>
      <span className="absolute right-2 top-2 bg-white p-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer"><HeartIcon /></span>
    </div>
  );
};

export default ExploreCard;
