"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { LayoutGrid } from "./ui/layout-grid";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Project } from "@prisma/client";

interface ProjectsPrps{
  projects:Project[]
}

const Projects = ({projects}:ProjectsPrps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 0.5], [-500, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const translateX = useTransform(scrollYProgress, [0.5, 1], [0, 1500]);
  const cards = [
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <motion.div
      style={{ translateX,  opacity, scale }}
      ref={ref}
      className="relative w-screen pb-5 lg:px-[100px] h-screen bg-[#041130]"
    >
      <h1 className="text-2xl text-[#bed6fb] font-bold text-center pt-[50px] pb-[30px]">
        Projects
      </h1>
      <BackgroundBeams />
      <LayoutGrid cards={projects} />
    </motion.div>
  );
};

export default Projects;
