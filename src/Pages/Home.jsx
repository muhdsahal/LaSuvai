import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseIcon, EnvelopeIcon, RectangleStackIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolidIcon, HomeIcon as HomeOutlineIcon, RectangleStackIcon as StackSolidIcon, RectangleStackIcon as StackOutlineIcon, BriefcaseIcon as BriefcaseSolidIcon, BriefcaseIcon as BriefcaseOutlineIcon, EnvelopeIcon as EnvelopeSolidIcon, EnvelopeIcon as EnvelopeOutlineIcon } from '@heroicons/react/24/solid';
import swiggy from '../assets/DeliveryPartner/swiggy.png';
import zomato from '../assets/DeliveryPartner/zomato.jpg';
import Banner from './Banner';
import { NavbarComp } from './NavbarComp';
import Services from './Services';
import FooterComp from './FooterComp';
import Contact from './Contact';
import Faq from './Faq';

function Home() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <div className='flex flex-col justify-between overflow-x-hidden'>
            <div className='bg-[#1e8f58]'>
                <NavbarComp/>
                <div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} >
                        <h1 className='text-[#FAFAFA] pl-1 pr-1 mt-3  text-center text-xl sm:text-6xl font-semibold  animate-pulse'><span className='opacity-50 text-[#edc35e]'>Leading  </span><span className='text-[white]'>Corporate Catering Services in</span><span className='opacity-50 text-[#edc35e]'>Banglore </span></h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='sm:pl-32 sm:pr-32 p-5 pt-14 pb-14' >
                        <p className='text-[#FAFAFA] opacity-70 font-extralight text-center sm:text-2xl'>

                        Our Cloud Kitchen, we take pride in offering high-quality catering services for corporate events, daily office meals, and flexible weekly meal plans, all delivered right to your office door. Whether you’re hosting a corporate seminar, planning a team lunch, or looking for nutritious meals throughout the workweek, our cloud kitchen ensures every meal is freshly prepared, nutritious, and bursting with flavor.
                       </p>
                    </motion.div>
                    <Banner/>
                    <Faq/>
                    <Contact/>
                </div>
            </div>
            <FooterComp/>
        </div>
    )
}

export default Home