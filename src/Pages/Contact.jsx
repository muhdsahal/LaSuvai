import { Typography } from '@material-tailwind/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import mail from '../assets/Icons/email.png'
import whatsapp from '../assets/Icons/wpp.png'
import phone from '../assets/Icons/phone.png'
import instagram from '../assets/Icons/instagram.png'

function Contact() {
    return (
        <div className='w-full h-full bg-[#1e8f58]'>
            <div className='flex flex-wrap justify-center items-center mt-4'>
                <Typography className='text-4xl justify-center font-serif text-white'>Contact Us</Typography>
            </div>
            <div className='flex flex-wrap justify-center gap-10'>
                <div className='text-start flex flex-col gap-5  text-white p-5 mt-10'>
                    <div className='flex items-start'>
                        <img src={mail} alt="" className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10" />
                        <Typography className='text-3xl font-serif mt-0 ml-3'>lasuvai@gmail.com</Typography>
                    </div>
                    <div className='flex items-start'>
                        <img src={whatsapp} alt="" className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10" />
                        <Typography className='text-3xl font-serif mt-0 ml-3'>Whats App </Typography>
                    </div>
                    <div className='flex items-start'>
                        <img src={instagram} alt="" className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10" />
                        <Typography className='text-3xl font-serif mt-0 ml-3'>Instagram</Typography>
                    </div>
                    <div className='flex items-start'>
                        <img src={phone} alt="" className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10" />
                        <Typography className='text-3xl font-serif mt-0 ml-3'>+91 9876543210</Typography>
                    </div>
                </div>
                <div className='ml-5 mr-5 mb-5'>
                    <div className=''>
                        <Typography className='text-3xl text-left font-serif text-white'>Location</Typography>
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



        </div>
    )
}

export default Contact