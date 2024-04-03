import Image from "next/image"
import Container from "../Container"

export default function About(){
    return( 
    <Container>
    <div className="flex flex-col mt-24">
    <h3 className="text-2xl text-center md:text-left md:text-6xl my-8 font-semibold">
      About Us
    </h3>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Image src={"/assets/ceo.jpeg"} className="object-cover rounded-lg"  width={500} height={500} alt="About Lamb of Grace"/>
      </div>
      <div className="flex flex-col px-4 w-full md:w-1/2">
        <p className="text-justify px-2 text-xl">
          We are a registered Travel and Tour Agent, Educational and
          Immigration Consultant providing world-class education and travel
          support services to existing and new clients with the help of our
          diligent staff who are experienced in the jurisdictions of our
          operations.
        </p>
        <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2 mt-4">
          Our Team
        </h4>
        <p className="text-justify px-2 text-xl">
          Built on a model of excellent service and responsibility, the firm
          brings in top-notch talents and industry knowledge to help clients
          accomplish results that matter to them.
        </p>
        <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2 mt-4">
          Our Vision
        </h4>
        <p className="text-justify px-2 text-xl">
          Integrity in all ramifications, providing clients with world-class
          services by harnessing educational opportunities and drawing Nigeria
          into the global map through cultural integration and diversities.
        </p>
        <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2 mt-4">
          Our Mission
        </h4>
        <p className="text-justify px-2 text-xl">
          Promoting global access to educational opportunities through
          Tourism.
        </p>
        <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2 mt-4">
          Our Core Values
        </h4>
        <p className="text-justify px-2 text-xl">
          We constantly work to earn the trust of our clients and hold
          ourselves accountable to the following values:
        </p>
        <ul className="px-2 text-xl">
          <li>Integrity</li>
          <li>Team Work</li>
          <li>Excellence</li>
          <li>Community</li>
        </ul>
      </div>
    </div>
  </div></Container>)
}