"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { LayoutGrid } from "./ui/layout-grid";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Project } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProjectsPrps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsPrps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathname = usePathname();
  const translateY = useTransform(scrollYProgress, [0.5, 0.7], [0, 200]);

  const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const translateX = useTransform(scrollYProgress, [0.7, 1], [0, 1500]);

  return (
    <motion.div
      style={{ translateX, opacity, scale, translateY }}
      ref={ref}
      className="relative w-screen pb-5 lg:px-[100px] h-screen bg-[#041130]"
    >
      {pathname == "/" && (
        <div className="absolute top-[50px] right-[120px] justify-end z-[999]">
          {" "}
          <Link className="link text-blue-600 pb-3 text-end" href={"/projects"}>
            See More Projects...
          </Link>{" "}
        </div>
      )}
      <h1 className="text-2xl text-[#bed6fb] font-bold text-center pt-[50px] pb-[30px]">
        Projects
      </h1>

      <BackgroundBeams />

      <LayoutGrid cards={projects} />
    </motion.div>
  );
};

export default Projects;
