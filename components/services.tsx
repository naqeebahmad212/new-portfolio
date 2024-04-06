"use client";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion, transform, useScroll, useTransform } from "framer-motion";

const Services = () => {
  const servIceRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: servIceRef,
    offset: ["start end", "end start"],
  });
  // const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useTransform(scrollYProgress, [0.7, 1], [0, 1200]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [-500, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const translateXCard1 = useTransform(scrollYProgress, [0, 0.2], [-200, 0]);

  const translateXCard2 = useTransform(scrollYProgress, [0, 0.3], [-400, 0]);

  const translateXCard3 = useTransform(scrollYProgress, [0, 0.4], [-600, 0]);

  return (
    // <AuroraBackground className="relative">
    <motion.div
      style={{
        translateX,
        
        scale,
        opacity,
      }}
      ref={servIceRef}
      className="lg:h-screen w-screen  bg-[#041130] gap-5 flex items-center justify-center flex-col lg:flex-row sticky top-0 "
    >
      <div className="absolute top-0 lg:top-[80px] w-full my-5 left-5 text-white">
        <h1 className="w-full text-center text-2xl text-[#bed6fb] font-bold">
          Services
        </h1>
      </div>
      <motion.div
        style={{
          translateX: translateXCard1,
        }}
        transition={{ duration: 2 }}
        className="plan w-[80%] md:w-[400px] lg:w-[300px] card1 mt-[60px] text-gray-300"
      >
        <div className="inner">
          <span className="pricing">
            <span>
              $49 <small>/ m</small>
            </span>
          </span>
          <p className="title">Professional</p>
          <p className="info">
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                <strong>20</strong> team members
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{
          translateX: translateXCard2,
        }}
        transition={{ duration: 2 }}
        className="plan w-[80%] md:w-[400px] lg:w-[300px] card2 mt-[60px]"
      >
        <div className="inner">
          <span className="pricing">
            <span>
              $49 <small>/ m</small>
            </span>
          </span>
          <p className="title">Professional</p>
          <p className="info">
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                <strong>20</strong> team members
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{
          translateX: translateXCard3,
          transitionProperty: translateX,
        }}
        transition={{ duration: 2 }}
        className="plan w-[80%] md:w-[400px] lg:w-[300px] card3 mt-[60px]"
      >
        <div className="inner">
          <span className="pricing">
            <span>
              $49 <small>/ m</small>
            </span>
          </span>
          <p className="title">Professional</p>
          <p className="info">
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                <strong>20</strong> team members
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
    // </AuroraBackground>
  );
};

export default Services;
