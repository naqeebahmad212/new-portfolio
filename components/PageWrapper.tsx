"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const path = usePathname();
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={`${className} pageWrapper`}>
      <AnimatePresence>
        <motion.div
          key={path}
          className="fixed top-0 left-0 h-screen w-screen bg-blue-500 flex justify-center items-center text-2xl font-bold text-themeText pointer-events-none z-[9999]"
          // key={path}
          initial={{ x: "-100vw" }}
          animate={{
            x: ["-100vw", "0vw", "-100vw"],
            // transitionEnd: { display: "none" },
          }}
          exit={{ x: "-100vw" }}
          transition={{ duration: 0.9, delay: 0 }}
        ></motion.div>

        <motion.div
          key={path}
          className="fixed top-0 left-0 h-screen w-screen bg-[#041130] flex justify-center items-center text-2xl font-bold text-themeText pointer-events-none z-[9999]"
          // key={path}
          initial={{ x: "-100vw" }}
          animate={{
            x: ["-100vw", "-15vw", "-100vw"],
            // transitionEnd: { display: "none" },
          }}
          exit={{ x: "-100vw" }}
          transition={{ duration: 0.7, delay: 0 }}
        ></motion.div>
      </AnimatePresence>

      {/* <AnimatePresence mode="wait"> */}
      <motion.div
        key={path}
        initial={{ x: "100vw" }}
        animate={{ x: ["100vw", "0vw"] }}
        exit={{ x: ["0", "-100vw"] }}
        transition={{
          delay: 0.7,
          duration: 0.5,
          // type: "spring",
        }}
        className={`${className}`}
      >
        {children}
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default PageWrapper;
