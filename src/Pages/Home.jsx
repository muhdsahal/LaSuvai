import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseIcon, EnvelopeIcon, RectangleStackIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolidIcon, HomeIcon as HomeOutlineIcon, RectangleStackIcon as StackSolidIcon, RectangleStackIcon as StackOutlineIcon, BriefcaseIcon as BriefcaseSolidIcon, BriefcaseIcon as BriefcaseOutlineIcon, EnvelopeIcon as EnvelopeSolidIcon, EnvelopeIcon as EnvelopeOutlineIcon } from '@heroicons/react/24/solid';
import swiggy from '../assets/DeliveryPartner/swiggy.png';
import eatsure from '../assets/DeliveryPartner/eatsure.png';
import zomato from '../assets/DeliveryPartner/zomato.jpg';
import figmaImage from '../assets/skills/figma.png';
import Banner from './Banner';
import { NavbarComp } from './NavbarComp';

function Home() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };


    const skillData = [
        { 
            title: "swiggy",
            imageSrc: swiggy
        },{ 
            title: "zomato",
            imageSrc: zomato
        },{ 
            title: "eatsure",
            imageSrc: eatsure
        },
        
    ];

    return (
        <div className='flex flex-col justify-between bg-[black] overflow-x-hidden'>
            <div>
                <NavbarComp/>
                <div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} >
                      Bangalore

                        <h1 className=' text-[#FAFAFA] pl-1 pr-1  text-center text-xl sm:text-6xl font-semibold shadow-lg animate-pulse'><span className='opacity-50 text-[#79ff5e]'>Best  </span><span className='text-[white]'>Corporate Caterers in</span><span className='opacity-50 text-[#79ff5e]'> Banglore </span></h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='sm:pl-32 sm:pr-32 p-5 pt-14 pb-14' >
                        <p className='text-[#FAFAFA] opacity-70 font-extralight text-center sm:text-2xl'>
                        Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences.
                        Let us make your events special with our wide range of dishes and careful attention to every detail. Enjoy the best flavors and warm hospitality with us. Welcome to great dining!                        </p>
                    </motion.div>
                    <Banner/>
                    <h1 className='text-4xl font-semibold uppercase text-center text-white'>  Delivery Partners </h1>
            
                    <div className='flex flex-wrap justify-center bg-black gap-5 p-5 w-full h-full'>
                        {skillData.map((item, index) => (
                            <div key={index} className='flex justify-center items-center p-5'>
                                <div className=' flex flex-col justify-center items-center rounded-3xl special-shadow shadow-[0px_0px_10px_0px_#79ff5e] w-40 h-40 '>
                                    <div className='flex justify-center  items-center '>
                                        <img src={item.imageSrc} alt="img" className='w-full h-full flex justify-center rounded-3xl' />
                                    </div>
                                    <div className='flex justify-center  items-center '>
                                        {/* <h2 className=' text-center uppercase font-semibold text-[#79ff5e] '>{item.title}</h2> */}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <h1 className='text-center uppercase font-semibold bg-[#000000] text-4xl text-white'>Works</h1>
                    <div className='bg-red w-max-screen h-max-screen scroll-m-1 justify-center bg-[#000000] flex flex-wrap gap-5'>
                        <div className='w-[45rem] h-[30rem] bg-[#000000] rounded-3xl special-shadow shadow-[0px_0px_10px_0px_#79ff5e] mt-5'>
                        <img src={figmaImage} alt="works" className='w-full h-3/4 mt-3' />
                        </div>
                      
                    </div> */}
                </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 100, scale: 1 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.3 }} className='md:hidden block'>
                <div className="flex justify-between p-5 pt-3 items-center">
                    <div
                        onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'home' ? (
                            <HomeSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <HomeIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter('stack')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'stack' ? (
                            <StackSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <RectangleStackIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter('briefcase')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'briefcase' ? (
                            <BriefcaseSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <BriefcaseIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter('envelope')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'envelope' ? (
                            <EnvelopeSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <EnvelopeIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Home