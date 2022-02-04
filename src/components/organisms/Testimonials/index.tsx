import React from "react";
import Image from "next/image";

import ArrowCircleLeftIcon from "@/assets/icons/ArrowCircleLeftIcon";
import ArrowCircleRightIcon from "@/assets/icons/ArrowCircleRightIcon";
import DoubleQuotesIcon from "@/assets/icons/DoubleQuotesIcon";
import axios from "@/utils/axios";
import { H3 } from "@/components/atoms/Typography";

type TestimonialProps = {
  className?: string;
};

const Testimonials: React.FC<TestimonialProps> = ({ className = "" }) => {
  const [data, setData] = React.useState([]);
  const [current, setCurrent] = React.useState(2);
  const [prev, setPrev] = React.useState<string>("");

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp: any = await axios.get("/photos?_limit=6");
        // console.log("Data", resp.data);
        setData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  console.log("Data", data);

  const length = data.length;

  if (!Array.isArray(data) || length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 2 ? length - 1 : current - 1);
    setPrev("prev");
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 2 : current + 1);
    setPrev("next");
  };

  console.log(current);

  return (
    <div className={` p-3 ${className}`}>
      <H3>Testimonials</H3>
      <div className="container mx-auto flex items-center justify-center">
        <button
          className="absolute left-0 hover:text-green-500"
          onClick={prevSlide}
        >
          <ArrowCircleLeftIcon />
        </button>
        <section className="relative grid grid-cols-3 gap-5 mt-2 overflow-hidden">
          {data.slice(current - 2, current + 1).map(({ title, url, body }) => (
            <section className="bg-pink-50 p-3 rounded-md shadow-md" key={url}>
              <Image src={url} height="200px" width="auto" alt="images" />
              <span className="pl-3 font-serif">
                <DoubleQuotesIcon />
                <i>{title}</i>
              </span>
            </section>
          ))}
        </section>
        <button
          className="absolute right-0 hover:text-green-500"
          onClick={nextSlide}
        >
          <ArrowCircleRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
