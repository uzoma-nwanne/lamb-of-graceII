"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Container from "../Container";

export default function Hero() {
  const router = useRouter();
  const handleContact = () => {
    router.push("/contact");
  };

  return (
    <Container>
      {/*  Hero Area Mobile */}

      <div className="flex flex-col md:hidden mt-24">
        <Image
          src={"/assets/Banner Slider.svg"}
          width={500}
          height={300}
          alt="Banner"
        />
        <h2 className="mt-6 text-center font-sans text-lg">
          Get the cheapest deals for local and international flights from us
        </h2>
        <div className="flex  flex-col justify-center relative">
          <Image
            src={"/assets/bannerStyle.svg"}
            width={500}
            height={150}
            alt="Banner"
          />
          <button
            className="bg-[#3a86ff] absolute top-6 text-2xl text-[#fff] px-4 py-2 rounded-lg"
            onClick={handleContact}
          >
            Contact Us <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/*  Hero Area Desktop */}
      <div className="hidden sm:flex flex-row mt-24 ">
        <div className="w-[60%]">
          <h2 className="text-left text-8xl text-[#2d2d2d] w-[629px] font-semibold mt-12 leading-snug">
            Explore the world with us
          </h2>
          <h3 className="text-2xl mt-5 text-[#2d2d2d]">
            Get the cheapest deals for local and international flights from us
          </h3>
          <Button
            className="bg-[#3a86ff] text-[#fff] px-4 py-2 mt-5 rounded-lg"
            onClick={handleContact}
          >
            Contact us <FontAwesomeIcon icon={faArrowRight} />
          </Button>
          <Image
            src={"/assets/bannerStyle.svg"}
            className="object-fit"
            width={700}
            height={400}
            alt="Banner"
          />
        </div>
        <div className="flex ml-2 justify-between py-4">
          <div className="flex item-justify w-[45%]">
            <Image
              src={"/assets/cover1.svg"}
              alt="Cover Image"
              width={500}
              height={800}
            />
          </div>
          <div className="w-[45%]">
            <Image
              src={"/assets/cover2.svg"}
              alt="Cover Image"
              className="object-contain"
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
