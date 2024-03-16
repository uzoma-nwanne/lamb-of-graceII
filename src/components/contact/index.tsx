import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faMailBulk, faLocation } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Container from "../Container"
import ContactForm from "./contact-form"

export default function Contact(){
    return(<Container><div className="md:px-20 flex flex-col-reverse md:flex-row mt-20 py-8 w-full justify-between">
    <div className="w-full md:w-[45%] px-2">
      <h2 className="text-left text-6xl text-[#2d2d2d] font-semibold leading-snug">
        Contact Us
      </h2>
      <ContactForm/>
      {/* <FontAwesomeIcon icon={faMailBulk}/> <a href="mailto:info@lambofgracetravels.com">info@lambofgracetravels.com</a>
      <p className="mt-8"><FontAwesomeIcon icon={faPhone}/>  +2348038168708</p>
      <p className="mt-8"><FontAwesomeIcon icon={faLocation}/>  2nd Floor Nicon Insurance Plaza, Mohammed Buhari way, Garki, Abuja, FCT</p> */}
    </div>
    <div className="w-full md:w-1/2">
      <Image src={"/assets/contact.svg"} alt="Contact Us"  width={500} height={500}/>
    </div>
  </div></Container>)
}