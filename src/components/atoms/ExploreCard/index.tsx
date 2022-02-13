import Link from "next/link";
import Image from "next/image";

import { BodyText } from "@/components/atoms/Typography";
import style from "./explore-card.module.scss";
import FavouriteButton from "../FavouriteButton";

type ExploreCardProps = {
  title: string;
  href: string;
  imgSrc: string;
  alt: string;
};

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  href,
  imgSrc,
  alt,
}) => {
  return (
    <div className={style.container}>
      <Image src={`/images/${imgSrc}`} alt={alt} width={370} height={233} />
      <p>
        From{" "}
        <Link href="/">
          <a>TripAdvisor</a>
        </Link>
      </p>
      <Link href={href}>
        <a>
          <BodyText className={style.bodyText}>{title}</BodyText>
        </a>
      </Link>
      {/* <button><HeartIcon className={style.icon}/></button> */}
      <FavouriteButton />
    </div>
  );
};

export default ExploreCard;
