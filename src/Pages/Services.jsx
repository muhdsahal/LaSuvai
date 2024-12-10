import { Typography } from '@material-tailwind/react'
import React from 'react'
import ctr_img from '../assets/ctr_img1.avif'

function Services() {
    return (
        <div>
            <Typography className='text-white text-4xl text-center mt-5 mb-5 '>Our Services</Typography>
            <div className='flex flex-wrap gap-5 justify-center items-center px-4'>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Catering Service</Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Party Orders</Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Canteen Service (Mess)</Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Cafeteria Catering </Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Juice Counter</Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Packaged Food</Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Buffet Services</Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
                <div className='w-80 h-96 rounded-3xl bg-red-500'>
                    <div className=" w-full">
                        <img src={ctr_img} alt="" className='rounded-t-3xl h-40 w-full' />
                    </div>
                    <Typography className='text-center text-xl'>Home Delivery Services</Typography>
                    <p className='text-center'>Welcome to LA SUVAI Platform by Best Caterers in Bangalore! We offer delicious food, top-notch service, and memorable experiences
                        Let us make your events special with our wide range of dishes and careful attention to every detail.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
