import { Typography } from '@material-tailwind/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import mail from '../assets/Icons/mail.png'
import whatsapp from '../assets/Icons/whatsapp.png'
import phone from '../assets/Icons/phone-call.png'
import instagram from '../assets/Icons/instagram.png'
import location from '../assets/Icons/location.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaLocationArrow } from 'react-icons/fa6'

function Contact() {
    return (
        <div className='w-full h-full bg-[#1e8f58]'>
            <div className='flex flex-wrap justify-center items-center mt-4'>
                <Typography className='text-4xl justify-center font-extralight text-white mb-10'>Contact Us</Typography>
            </div>

            <div className='flex flex-wrap justify-center gap-10'>
                <div className='text-start flex flex-col gap-3 ml-2 text-white p-5'>
                    <Typography className='pl-5 text-3xl font-extralight'>Address</Typography>
                    <p className="text-left mt-4 font-light">
                        <span className="flex items-start flex-col gap-1 relative text-[#bbb9b9dc] transition duration-300 ease-out">
                            <div className="max-w-xs">
                                <div className="flex text-start items-start pl-3">
                                    {/* <FontAwesomeIcon icon={faLocationArrow} className="h-5 w-5 text-4xl text-[#ba4b29]" /> */}
                                    <img src={location} alt="" />
                                    <div className="text-base font-extralight text-white">
                                        <p className=" px-2 text-xl">42A/A, 2nd Floor,</p>
                                        <p className='px-2 text-xl'>Sarjapura - Marathahalli Rd,</p>
                                        <p className='px-2 text-xl'>Jakkasandra, 1st Block Koramangala,</p>
                                        <p className='px-2 text-xl'>Bangalore 560034</p>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </p>


                </div>
                <div className='ml-5 mr-5 mb-5'>
                    <div className=''>
                        <Typography className='text-3xl text-left font-extralight text-white'>Location</Typography>
                        <iframe
                            className='rounded-3xl border-[2px] border-black h-96'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.741198986447!2d77.61924415!3d12.91187995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152a2bf0bf2d%3A0x97e9eb792d8502d0!2sMadiwala%20Lake%20Park!5e0!3m2!1sen!2sin!4v1733814037400!5m2!1sen!2sin"
                            width="600"
                            // height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
            </div>
            <div className="flex justify-between items-center px-10 py-5 text-white">
                {/* Left Section: Email and Phone */}
                <div className="flex items-center gap-10">
                    <div className="flex items-center">
                        <img src={mail} alt="Mail Icon" className="w-8 h-8" />
                        <a href="mailto:lasuvai@gmail.com">
                            <Typography className="text-xl font-extralight ml-3">lasuvai@gmail.com</Typography>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <img src={phone} alt="Phone Icon" className="w-8 h-8" />
                        <a href="tel:+916366369915">
                            <Typography className="text-xl font-extralight ml-3">+91 6366369915</Typography>
                        </a>
                    </div>
                </div>

                {/* Right Section: Social Media Icons */}
                <div className="flex items-center gap-5">
                    <a href="https://wa.me/+916366369915" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="WhatsApp Icon" className="w-8 h-8" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram Icon" className="w-8 h-8" />
                    </a>
                </div>
            </div>





        </div>
    )
}

export default Contact