import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image"

export default function Footer(){
    return( <div className='flex flex-col md:flex-row bg-[#173666] w-full h-120: md:h-80 mt-40 px-20 py-10'>
    <div className='w-full md:w-1/2 flex'>
      <div className='w-1/4 '>
        <img src={"assets/flight.svg"} className=''/>
      </div>
      <div className='flex flex-col justify-start space-y-4'>
        <h3 className='text-[#fff] text-4xl'>Lamb of Grace</h3>
        <p className='text-[#fff]'><span className='mr-2'><FontAwesomeIcon icon={faLocationDot}/></span> 2nd Floor, Nicon Insurance Plaza, Mohammadu Buhari Way, Garki 900211, Abuja, Federal Capital Territory</p>
        <div className='flex text-[#fff] space-x-4 py-8'>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faYoutube}/>
        </div>
      </div>
    </div>
    <div className='text-[#fff] flex flex-col justify-end items-center'>
        <p className='md:pl-40'>&copy; 2023 Lamb of Grace Travels and Tours Limited</p>
    </div>
  </div>)
}