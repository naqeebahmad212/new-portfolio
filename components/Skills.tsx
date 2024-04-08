"use client";
import React, { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInvView, setIsInView] = useState(false);
  const [htmlProg, setHtmlProg] = useState(9);
  const [teamWork, setTeamWork] = useState(0);
  const [creativity, setCreativity] = useState(0);
  const [projectCompletion, setProjectCompletion] = useState(0);
  const [projectManagement, setProjectManagement] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const secScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0.6, 0.9], [0, 1300]);
  const translateY = useTransform(scrollYProgress, [0.5, 0.75], [0, 250]);
  let htmlSkills = 89;
  let cssSkills = 88;
  let jsSkills = 84;
  let reactSkills = 90;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const topPosition = ref.current?.getBoundingClientRect().top;
      const windInner = window.innerHeight;
      if (topPosition && topPosition - windInner <= -100) {
        setTimeout(() => {
          setHtmlProg(99);
          setTeamWork(78);
          setProjectCompletion(100);
          setCreativity(88);
          setProjectManagement(82);
        }, 1000);
      } else {
        setHtmlProg(9);
        setTeamWork(0);
        setProjectCompletion(0);
        setCreativity(0);
        setProjectManagement(0);
      }
    });

    // if()
  });

  return (
    <motion.div
      style={{
        scale: secScale,
        // translateX,
        opacity,
        translateY,
      }}
      ref={ref}
      className="py-10 w-screen pt-[100px] lg:h-screen  bg-[#041130]"
    >
      <h1 className="text-center w-full text-2xl font-bold text-[#bed6fb]">
        My Skills
      </h1>
      <div className="w-full flex justify-center lg:justify-around items-center lg:items-start flex-col lg:flex-row">
        <div className="tech-skills  z-[999]">
          <h1 className="text-blue-500 p-10 text-xl font-bold">
            Technical Skills
          </h1>
          <div className="w-[300px] text-white py-2">
            <div className="flex justify-between">
              <label htmlFor="title">HTML</label>
              <span>{htmlSkills}%</span>
            </div>
            <div className="progBar w-full h-2 bg-gray-400 rounded-full relative">
              <motion.div
                animate={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{
                  scaleX: `.${htmlSkills}`,
                  transformOrigin: "left",
                }}
                transition={{ duration: 2, delay: 1 }}
                className={`progBar w-[100%] transition-all duration-1000 ease-in h-2 bg-blue-500 rounded-full absolute top-0 left-0`}
              ></motion.div>
            </div>
          </div>
          <div className="w-[300px] text-white py-2">
            <div className="flex justify-between">
              <label htmlFor="title">CSS </label>
              <span>{cssSkills}%</span>
            </div>
            <div className="progBar w-full h-2 bg-gray-400 rounded-full relative">
              <motion.div
                animate={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{
                  scaleX: `.${cssSkills}`,
                  transformOrigin: "left",
                }}
                transition={{ duration: 2, delay: 1 }}
                className={`progBar w-[100%] transition-all duration-1000 ease-in h-2 bg-blue-500 rounded-full absolute top-0 left-0`}
              ></motion.div>
            </div>
          </div>

          <div className="w-[300px] text-white py-2">
            <div className="flex justify-between">
              <label htmlFor="title">JAVASCRIPT</label>
              <span>{jsSkills}%</span>
            </div>
            <div className="progBar w-full h-2 bg-gray-400 rounded-full relative">
              <motion.div
                animate={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{
                  scaleX: `.${jsSkills}`,
                  transformOrigin: "left",
                }}
                transition={{ duration: 2, delay: 1 }}
                className={`progBar w-[100%] transition-all duration-1000 ease-in h-2 bg-blue-500 rounded-full absolute top-0 left-0`}
              ></motion.div>
            </div>
          </div>

          <div className="w-[300px] text-white py-2">
            <div className="flex justify-between">
              <label htmlFor="title">REACT/NEXT.JS</label>
              <span>{reactSkills}%</span>
            </div>
            <div className="progBar w-full h-2 bg-gray-400 rounded-full relative">
              <motion.div
                animate={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{
                  scaleX: `.${reactSkills}`,
                  transformOrigin: "left",
                }}
                transition={{ duration: 2, delay: 1 }}
                className={`progBar w-[100%] transition-all duration-1000 ease-in h-2 bg-blue-500 rounded-full absolute top-0 left-0`}
              ></motion.div>
            </div>
          </div>
        </div>
        <div className="pro-skills ">
          <h1 className="text-blue-500 p-10 text-xl font-bold">
            Professional Skills
          </h1>
          <div className="sec1 w-60 my-5 flex justify-between">
            <div className="c-bar-1 flex flex-col justify-center">
              <div className="w-[60px]  h-[70px] relative">
                <CircularProgressbar
                  styles={buildStyles({
                    // Customize the transition duration (in milliseconds)

                    pathTransition: "all 3s ease-in-out",
                    pathColor: "#3c83f6",
                    textColor: "#3c83f6",

                    // Other style properties...
                  })}
                  strokeWidth={10}
                  value={teamWork}
                  text={`${teamWork}%`}
                />
              </div>
              <span className="text-white text-[11px]">Team Work</span>
            </div>

            <div className="c-bar-2 flex flex-col justify-center">
              <div className="w-[60px]  h-[70px] relative">
                <CircularProgressbar
                  styles={buildStyles({
                    // Customize the transition duration (in milliseconds)

                    pathTransition: "all 3s ease-in-out",
                    pathColor: "#3c83f6",
                    textColor: "#3c83f6",

                    // Other style properties...
                  })}
                  strokeWidth={10}
                  value={creativity}
                  text={`${creativity}%`}
                />
              </div>
              <span className="text-white text-[11px]">Creativity</span>
            </div>
          </div>
          <div className="sec2 w-60 flex justify-between">
            <div className="c-bar-3 flex flex-col justify-center">
              <div className="w-[60px]  h-[70px] relative">
                <CircularProgressbar
                  styles={buildStyles({
                    // Customize the transition duration (in milliseconds)

                    pathTransition: "all 3s ease-in-out",
                    pathColor: "#3c83f6",
                    textColor: "#3c83f6",

                    // Other style properties...
                  })}
                  strokeWidth={10}
                  value={projectCompletion}
                  text={`${projectCompletion}%`}
                />
              </div>
              <span className="text-white text-center text-[11px]">
                Project <br /> Completion
              </span>
            </div>
            <div className="c-bar-4 flex justify-center flex-col">
              <div className="w-[60px] self-end h-[70px] relative">
                <CircularProgressbar
                  styles={buildStyles({
                    // Customize the transition duration (in milliseconds)

                    pathTransition: "all 3s ease-in-out",
                    pathColor: "#3c83f6",
                    textColor: "#3c83f6",

                    // Other style properties...
                  })}
                  strokeWidth={10}
                  value={projectManagement}
                  text={`${projectManagement}%`}
                />
              </div>
              <span className="text-white text-center text-[11px]">
                Project <br /> Management
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
