import React from 'react';
import {
  Carousel,
  Typography,
  Button,
} from "@material-tailwind/react";
import food1 from '../assets/food1.png'
import food2 from '../assets/food2.png'
import food3 from '../assets/food3.png'
import food4 from '../assets/food4.png'
// import lasuvai from '../assets/lasuvai.png'
// Sample data for the slider
const slides = [
  {
    image: food1,
    title: "Discover Amazing Products",
    description: "Explore our wide range of high-quality products designed to meet your needs.",
    buttonText: "Shop Now",
  },
  {
    image: food2,
    title: "Exclusive Offers",
    description: "Take advantage of our limited-time deals and save big on your favorite items.",
    buttonText: "View Offers",
  },
  {
    image: food3,
    title: "Join Our Community",
    description: "Be part of our growing community and enjoy exclusive benefits and early access.",
    buttonText: "Sign Up",
  },
  {
    image: food4,
    title: "Join Our Community",
    description: "Be part of our growing community and enjoy exclusive benefits and early access.",
    buttonText: "Sign Up",
  },
];

function Banner() {
  return (
    <Carousel
      className="rounded-xl h-full"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full px-4 pl-4 bg-black">
          <div className="flex items-center justify-center w-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="h-96 w-64 "
            />
          </div>
          <div className="flex flex-col justify-center p-8">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {slide.title}
            </Typography>
            <Typography variant="paragraph" color="gray" className="mb-8">
              {slide.description}
            </Typography>
            <div>
              <Button color="blue" size="lg">
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Banner