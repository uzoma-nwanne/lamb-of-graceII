import Image from "next/image";
import Container from "../Container";

export default function Services() {
  return (
    <Container>
      <div className="flex flex-col mt-24">
        <h3 className="text-2xl text-center md:text-left md:text-6xl my-8 font-semibold">
          Our Services
        </h3>

        <div className="flex flex-col md:flex-row-reverse mt-4">
          <div className="w-full md:w-1/2 p-2">
            <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2">
              Visa Assistance
            </h4>
            <p className="text-justify px-2 text-xl my-4">
              We offer visas assistance to our potential clients by supporting
              with consultation, documentation gathering, appointment
              scheduling, guidiance and support and eventually visa collection.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/visa.svg"}
              className="rounded-md"
              width={800} height={500}
              alt="Visa Assistance"
            />
          </div>
        </div>

        {/* Visa Service */}
        <div className="flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/2 p-2">
            <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2">
              Tours & Travels
            </h4>
            <p className="text-justify px-2 text-xl my-4">
              We help with advice on destination selection with specific
              budgets, Itinerary planning, flight and accommodation bookings,
              transportation arrangements, providing the best tour packages,
              travel insurance packages.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/tour.svg"}
              className="rounded-md"
              alt="Tour"
              width={800} height={500}
            />
          </div>
        </div>

        {/* Admission */}
        <div className="flex flex-col md:flex-row-reverse mt-4">
          <div className="w-full md:w-1/2 p-2">
            <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2">
              International Admissions
            </h4>
            <p className="text-justify px-2 text-xl my-4">
              We help facilitate consultation, application assistance,
              university selection, visa guidance, financial aid and
              scholarships and test preparations(TOEFL, IELTS, or SAT).
            </p>
          </div>
          <div className=" w-full md:w-1/2">
            <Image
              src={"/assets/admission.jpeg"}
              className="rounded-md"
              width={800} height={500}
              alt="We handle admission processing for several schools"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/2 p-2">
            <h4 className="text-2xl text-center md:text-5xl md:text-left mx-2">
              Flight & Hotel Booking
            </h4>
            <p className="text-justify px-2 text-xl my-4">
              We have partnerships with leading hotels and airlines. This
              partnership ensures we get you the best deals on flights and
              hotels for destinations all over the world
            </p>
          </div>
          <div>
            <Image
              src={"/assets/admissions.svg"}
              className="rounded-md"
              width={800} height={500}
              alt="We handle admission processing for several schools"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
