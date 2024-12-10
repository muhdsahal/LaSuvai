// import React, { useEffect, useState } from 'react';
// import {
//   Carousel,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// import ctr1 from '../assets/ctr_img1.avif';
// import ctr2 from '../assets/ctr_img2.avif';
// import ctr3 from '../assets/ctr_img3.avif';
// import ctr4 from '../assets/ctr_img4.jpg';

// const slides = [
//   {
//     image: ctr1,
//     title: "Discover Amazing Products",
//     description: "Explore our wide range of high-quality products designed to meet your needs.",
//     buttonText: "Shop Now",
//   },
//   {
//     image: ctr2,
//     title: "Exclusive Offers",
//     description: "Take advantage of our limited-time deals and save big on your favorite items.",
//     buttonText: "View Offers",
//   },
//   {
//     image: ctr3,
//     title: "Join Our Community",
//     description: "Be part of our growing community and enjoy exclusive benefits and early access.",
//     buttonText: "Sign Up",
//   },
//   {
//     image: ctr4,
//     title: "Join Our Community",
//     description: "Be part of our growing community and enjoy exclusive benefits and early access.",
//     buttonText: "Sign Up",
//   },
// ];

// function Banner() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Automatically change slides every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000); // 5 seconds interval

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <Carousel
//       className="rounded-xl h-full bg-[#1e8f58]"
//       activeIndex={activeIndex}
//       onChange={setActiveIndex}
//       navigation={({ setActiveIndex: navSetActiveIndex, activeIndex: navActiveIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all ${
//                 navActiveIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => navSetActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
//       {slides.map((slide, index) => (
//         <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full px-4 pl-4">
//           <div className="flex items-center justify-center w-full">
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-96 object-center rounded-3xl"
//             />
//           </div>
//           <div className="flex flex-col justify-center p-8">
//             <Typography variant="h2" color="blue-gray" className="mb-4">
//               {slide.title}
//             </Typography>
//             <Typography variant="paragraph" color="gray" className="mb-8">
//               {slide.description}
//             </Typography>
//             <div>
//               <Button color="blue" size="lg">
//                 {slide.buttonText}
//               </Button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Carousel>
//   );
// }

// export default Banner;
