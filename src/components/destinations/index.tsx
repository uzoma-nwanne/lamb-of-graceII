'use client'
import Container from "../Container";
import Slider from "react-slick";
import Image from "next/image";

export default function Destinations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  };
  return (
    <Container>
      <div>
        <h3 className="text-2xl text-center md:text-left md:text-6xl my-8 font-semibold">
          Our Popular Destinations
        </h3>
        <Slider {...settings} className="hidden md:block">
          <div>
            <Image
              src={"/assets/cairo.svg"}
              width={500}
              height={500}
              alt="Cairo is a top destination"
            />
          </div>
          <div>
            <Image
              src={"/assets/dubai.svg"}
              width={500}
              height={500}
              alt="Dubai is a top destination"
            />
          </div>
          <div>
            <Image
              src={"/assets/london.svg"}
              width={500}
              height={500}
              alt="London is a top destination"
            />
          </div>
          <div>
            <Image
              src={"/assets/newyork.svg"}
              width={500}
              height={500}
              alt="Newyork is a top destination"
            />
          </div>
        </Slider>
        <Slider {...settings2} className="md:hidden">
          <div>
            <Image
              src={"/assets/cairo.svg"}
              width={500}
              height={500}
              alt="Cairo is a top destination"
            />
          </div>
          <div>
            <Image
              src={"/assets/dubai.svg"}
              width={500}
              height={500}
              alt="Dubai is a top destination"
            />
          </div>
          <div>
            <img
              src={"/assets/london.svg"}
              width={500}
              height={500}
              alt="London is a top destination"
            />
          </div>
          <div>
            <img
              src={"/assets/newyork.svg"}
              width={500}
              height={500}
              alt="Newyork is a top destination"
            />
          </div>
        </Slider>
      </div>
    </Container>
  );
}
