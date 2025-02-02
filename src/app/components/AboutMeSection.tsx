"use client";

import { useState } from "react";

const slides = [
  <div key={0} className="w-full h-auto bg-customRed">
    <div className="w-1/3 p-4">
      <img src="/images/ME2.png" alt="" className="w-full h-auto" />
    </div>
  </div>,
  <div key={1} className="w-full h-auto bg-customRed">
    <div className="w-1/3 p-4">
      <img src="/images/ED.png" alt="" className="w-full h-auto" />
    </div>
  </div>,


  <div key={2} className="w-full bg-customRed text-white text-3xl font-montserrat">
    <div className="flex justify-evenly w-1/3 items-center" style={{ height: "33.125rem" }}>
      <div className="flex flex-col h-full">
        <div className="h-2/3 flex items-center justify-center font-bold" style={{ fontSize: "18rem" }}>0</div>
        <div className="h-1/3 w-full flex flex-col items-center text-5xl font-medium justify-center">
          <div>Years of</div>
          <div>Experiences</div>
        </div>
      </div>

      <div className="flex flex-col h-full">
        <div className="h-2/3 flex items-center justify-center font-bold" style={{ fontSize: "18rem" }}>0</div>
        <div className="h-1/3 w-full text-center text-5xl font-medium justify-center">
          <div>Happy client</div>
        </div>
      </div>

      <div className="flex flex-col h-full">
        <div className="h-2/3 flex items-center justify-center font-bold" style={{ fontSize: "18rem" }}>1</div>
        <div className="h-1/3 w-full flex flex-col items-center text-5xl font-medium justify-center">
          <div>On going</div>
          <div>Project</div>
        </div>
      </div>
    </div>
  </div>
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className=" mx-auto flex justify-around items-start w-full font-montserrat">
      <div className="relative w-full my-20 overflow-hidden">
        {/* Wrapper with dynamic width to enable sliding */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              {slide}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          ❯
        </button>
      </div>
    </div>
  );
};


export default function AboutMeSection() {
  return (
    <>
      <div className="text-customBlack container mx-auto flex justify-around items-start w-full font-montserrat">
        <div className="flex flex-col justify-center w-1/4 border-b-8 border-customRed-third shadow-xl p-4">
          <div className="flex justify-center w-full"><img src="/images/Passion.png" className="w-20" alt="passion icon" /></div>
          <p className="my-4 text-center font-bold text-4xl">Inspiration</p>
          <div className="text-center font-medium">
            My inspiration comes from the assignment. I strive to deliver the best in every task, especially in software development, and continuously push myself to be better than I was yesterday.
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/4 border-b-8 border-customRed-third shadow-xl p-4">
          <div className="flex justify-center w-full"><img src="/images/Passion.png" className="w-20" alt="passion icon" /></div>
          <p className="my-4 text-center font-bold text-4xl">Career goal</p>
          <div className="text-center font-medium">
            My goal is to gain lessons and experience through in my area of ​​expertise. I need to practice various skills that are necessary for the job and organization, such as presentation skills or multi task skill
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/4 border-b-8 border-customRed-third shadow-xl p-4">
          <div className="flex justify-center w-full"><img src="/images/Passion.png" className="w-20" alt="passion icon" /></div>
          <p className="my-4 text-center font-bold text-4xl">Interest</p>
          <div className="text-center font-medium">
            My areas of interest focus on documentation, requirements engineering and requirements modeling, as well as bring those work to into the development process.
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[65vh] bg-customRed-bg my-20">

      </div> */}
      <CustomCarousel />

    </>

  );
}