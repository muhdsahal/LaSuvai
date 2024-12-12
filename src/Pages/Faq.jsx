import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

function Faq() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "What Are The Services La Suvai Provides?",
            answer: "La Suvai provides catering services, event planning, and culinary workshops."
        },
        {
            question: "Where Is It Located?",
            answer: "La Suvai is located in banglore, Karnataka, India."
        },
        {
            question: "Hello world hello world hello",
            answer: "This is a placeholder answer for the third question."
        }
    ];

    return (
        <div className='w-full h-full bg-[#1e8f58] mt-10'>
            <h3 className='text-center text-4xl font-extralight text-white mb-6'>FAQ</h3>
            <div className='flex flex-col items-center'>
                {faqData.map((faq, index) => (
                    <div key={index} className='w-1/2 mb-4'>
                        {/* Question container */}
                        <div
                            className='flex justify-between items-center cursor-pointer p-3 border-[2px] border-black bg-white'
                            onClick={() => toggleQuestion(index)}
                        >
                            <p className='text-xl font-extralight'>{faq.question}</p>
                            {/* Arrow icon toggles based on state */}
                            {openQuestion === index ? (
                                <FaChevronUp className='text-xl text-gray-500' />
                            ) : (
                                <FaChevronDown className='text-xl text-gray-500' />
                            )}
                        </div>
                        {/* Answer container */}
                        {openQuestion === index && (
                            <div className='p-3 border-[2px] border-t-0 border-black bg-gray-100'>
                                <p className='text-lg font-extralight'>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
