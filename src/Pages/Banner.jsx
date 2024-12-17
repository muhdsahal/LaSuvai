import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import online_delivery from "../assets/banner/online_delivery.png";
import events from "../assets/banner/events.png";
import weekly_meal from "../assets/banner/weekly_meal.png";
import corperate_catering from "../assets/banner/corperate_catering.png";
import corperate_events from "../assets/banner/corperate_events.png";
import ctr2 from "../assets/ctr_img2.avif";
import ctr3 from "../assets/ctr_img3.avif";
import ctr4 from "../assets/ctr_img4.jpg";

const slides = [
  {
    image: corperate_catering,
    title: "Corporate Catering",
    description:
      `We offer premium corporate catering services, providing a wide range of delicious and professionally prepared meals for businesses. From breakfast spreads to executive lunches and customized event menus, we ensure a seamless and satisfying experience for your team and guests. Our service is designed to meet diverse dietary preferences, delivering quality food that enhances your corporate gatherings, meetings, and events. With attention to detail and excellent customer service, we aim to exceed expectations and make your business occasions memorable.`
  },
  {
    image: corperate_events,
    title: "Corporate Events",
    description:
      `We specialize in providing exceptional food for corporate events, offering a variety of menus tailored to your needs. Whether it's a formal meeting, conference, or company celebration, we deliver high-quality meals that impress and satisfy. From elegant plated dinners to casual buffets and refreshments, our team ensures your guests enjoy a seamless dining experience. We cater to diverse tastes and dietary requirements, making every corporate event memorable with delicious food and impeccable service.`
  },
  {
    image: events,
    title: "Events",
    description:
      `We provide high-quality food for all types of events, from corporate gatherings to weddings, parties, and more. Our diverse menus are tailored to suit any occasion, ensuring delicious meals that meet all tastes and dietary needs. Whether it's a formal dinner, casual buffet, or themed event, we deliver exceptional food and service to make your event unforgettable.`
  },
  {
    image: weekly_meal,
    title: "Weekly Meal Plans",
    description:
      ` We offer convenient weekly meal plans, providing nutritious and delicious meals tailored to your dietary preferences and needs. Each plan is designed to save you time and effort, with freshly prepared meals delivered right to your door. Whether you're looking for balanced meals, vegetarian options, or specialized diets, we ensure variety and quality in every week's menu.`

  },
  {
    image: online_delivery,
    title: "Online Delivery",
    description:
      `We offer fast and reliable online food delivery, bringing delicious meals straight to your door. With a wide variety of options to choose from, our service caters to different tastes and dietary needs, ensuring a convenient and satisfying dining experience. Whether you're craving comfort food or healthy meals, we make it easy to enjoy quality food with just a few clicks.`
  },
];

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full ">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pl-4">
              <div className="flex items-center justify-center w-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="h-96 object-fit rounded-3xl"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h1   className="mb-4 font-extralight text-[#edc35e] text-5xl">
                  {slide.title}
                </h1>
                <p className="mb-8 font-extralight text-xl  text-white">
                  {slide.description}
                </p>
                <div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Banner;
