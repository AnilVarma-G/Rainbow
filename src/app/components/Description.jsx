

import React from "react";
import { images } from "./constants";
import left from "../../../public/left.svg";
import right from "../../../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const rainbowColors = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#FFFF00", // Yellow
  "#66FF00", // Green
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#EE82EE", // Violet
];

const getColoredTitle = (title, idx, activeImage) => {
  const words = title.split(" ");
  const firstWord = "Rainbow";
  const remainingWords = words.slice(1);

  const getRandomColor = () => {
    return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  };

  return (
    <div className="text-center">
      <div>
        {firstWord.split("").map((letter, index) => (
          <motion.span
            key={`${idx}-first-${index}`}
            className={`${
              idx === activeImage
                ? "text-[40px] sm:text-[200px] lg:text-[200px]"
                : "text-[20px] sm:text-[40px] lg:text-[40px]"
            }`}
            style={{
              color: rainbowColors[index % rainbowColors.length],
              fontFamily: "Times New Roman, serif",
              margin: "0 2px",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div>
        {remainingWords.map((word, index) => (
          <motion.span
            key={`${idx}-second-${index}`}
            className={`${
              idx === activeImage
                ? "text-[20px] sm:text-[100px] lg:text-[100px]"
                : "text-[10px] sm:text-[40px] lg:text-[50px]"
            }`}
            style={{
              color: getRandomColor(),
              fontFamily: "Times New Roman, serif",
              margin: "0 0 sm:0 4px lg:0 8px",
            }}
            animate={{ color: getRandomColor() }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const Description = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className="relative w-full">
      <div className="absolute -top-4 -left-4 lg:left-0 z-50 p-4 logo">
        <Image
          src="/rainbowlogo.jpg"
          alt="Logo"
          width={100}
          height={100}
          style={{ borderRadius: "100%" }}
        />
      </div>

      <div className="relative w-full h-[50vh] sm:h-[100vh] overflow-hidden">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage ? "block relative w-full h-full" : "hidden"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={elem.src}
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100} // Adjust image quality if necessary
              />
            </div>

            <div className="absolute -top-4 left-0 w-full h-full flex flex-col justify-center items-center text-center font-semibold text-pink-600 px-6">
              <motion.div
                initial={{
                  opacity: idx === activeImage ? 0 : 0.5,
                  scale: idx === activeImage ? 0.5 : 0.3,
                }}
                animate={{
                  opacity: idx === activeImage ? 1 : 0.5,
                  scale: idx === activeImage ? 1 : 0.3,
                }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                }}
                className="w-full max-w-xl"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="mt-24 lg:mt-72 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                  {getColoredTitle(elem.title, idx, activeImage)}
                </div>
                <div className="leading-relaxed font-medium text-base tracking-wide mt-4">
                  <h2 className="text-red-950 font-extrabold">{elem.head}</h2>
                  <p>{elem.desc}</p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-50 flex justify-start items-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="cursor-pointer"
          onClick={clickPrev}
        >
          <Image src={left} alt="" />
        </motion.div>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-50 flex justify-end items-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="cursor-pointer"
          onClick={clickNext}
        >
          <Image src={right} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Description;





