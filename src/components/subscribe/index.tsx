import Container from "../Container";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Subscribe(){
return(
    <div
        className="bg-[#3a86ff] w-full h-80 md:px-20 py-10 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("/assets/subscribe-bg.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:w-1/2">
          <h3 className="text-5xl text-[#fff] font-semibold text-center ">
            Get updates on the best deals available
          </h3>
        </div>
        <div className="md:w-1/2 mt-4 flex flex-col md:flex-row justify-evenly h-10 items-center mt-4">
          <input type="text" className="rounded-md md:w-3/4 h-10 mr-2 mt-2" />
          <Button className="bg-[#fca311] text-[#fff] px-4 rounded-md w-1/2 md:w-1/4 h-10 mt-2">
            Subscribe
          </Button>
        </div>
      </div>)
}