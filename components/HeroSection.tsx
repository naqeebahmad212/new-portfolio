"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { MacbookScroll } from "./ui/macbook-scroll";
import Image from "next/image";
import pcImage from "@/Images/pc.png";
import myImage from "@/Images/myImg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "./Typed";

const HeroSection = () => {
  const [bgClr, setBgClr] = useState<string>();
  const [randNum, setRandNum] = useState<number>();

  const changeColr = () => {
    setRandNum(Math.floor(Math.random() * 16777215));
  };

  useEffect(() => {
    setBgClr("#" + randNum?.toString(16));
  }, [randNum]);

  setTimeout(() => {
    changeColr();
  }, 5000);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

  const translateY = useTransform(scrollYProgress, [0, 0.8], [0, -500]);

  const translateYBackg = useTransform(scrollYProgress, [0, 0.2], [0, 500]);

  return (
    <BackgroundGradientAnimation marginTop={translateYBackg} className="">
      <div
        ref={ref}
        className="flex items-center justify-around flex-col lg:flex-row lg:h-screen w-full p-5 "
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
          }}
          style={{
            translateY,
            opacity,
            transition: translateX,
          }}
          className={`intro w-[100%] md:w-[60%] self-start md:mt-[40px] lg:mt-[100px] h-[30%] pt-[100px] pl-5 md:pl-[50px]  `}
        >
          <div className={` text-3xl text-white font-bold`}>
            Hi I`m <span className="text-blue-500"> Naqeeb Ahmad</span>
            <Typed />
          </div>
          <div className="text-sm font-extralight text-white pt-3">
            With a passion for creating seamless digital experiences from front
            to back. I specialize in building robust web applications crafting
            elegant user interfaces with Nextjs|Reactjs to architecting scalable
            backend systems with frameworks like Node.js, expressjs , convex and
            other.
          </div>
        </motion.div>
        {/* <motion.img
          initial={{ opacity: 0, x: -200, y: -200 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          src={pcImage.src}
          alt="Pc"
          width={300}
          height={300}
          style={{
            translateX,
            opacity,
          }}
          className="h-[300px] self-end w-[600px] opacity-40"
        /> */}

        <motion.div className="relative">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className={`overflow-hidden h-[350px] image-container flex justify-center items-center self-end  transition-all duration-200 w-[350px] rounded-full  lg:mr-6`}
            style={{
              backgroundColor: `${bgClr}`,

              opacity,
              translateY,
            }}
          >
            <motion.img
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              className="relative z-30 "
              style={{
                translateY,
                opacity,
              }}
              transition={{ duration: 0.5 }}
              src={myImage.src}
              alt="Pc"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;
