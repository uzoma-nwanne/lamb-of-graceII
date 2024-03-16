import Image from "next/image";
import Container from "../Container";

export default function Partners() {
  return (
    <Container>
      <div>
        <h3 className="text-2xl text-center md:text-left md:text-6xl my-8 font-semibold">
          Our Partners
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-evenly">
          <div>
            <Image
              src={"/assets/british.svg"}
              alt="British Air"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              src={"/assets/sussex.svg"}
              alt="Sussex Air"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              src={"/assets/british.svg"}
              alt="British Air"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              src={"/assets/Qatar Air.svg"}
              alt="Qatar Air"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
