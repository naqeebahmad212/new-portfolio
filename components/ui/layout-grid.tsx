"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Project } from "@prisma/client";
import Link from "next/link";

export const LayoutGrid = ({ cards }: { cards: Project[] }) => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lastSelected, setLastSelected] = useState<Project | null>(null);

  const handleClick = (card: Project) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const ref = React.useRef(null);

  return (
    <motion.div className="w-full h-full  pb-[50px] grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} className={cn("")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              selected?.id !== card.id && "flex flex-col",
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-[70%] bg-cover w-full md:w-[70%] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}

            <BlurImage card={card} selectedId={selected?.id} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </motion.div>
  );
};

const BlurImage = ({
  card,
  selectedId,
}: {
  card: Project;
  selectedId: string | undefined;
}) => {
  const [loaded, setLoaded] = useState(true);
  return (
    <div
      style={{ backgroundImage: `url(${card.image})` }}
      // onLoad={() => setLoaded(true)}
      className={cn(
        "bg-cover flex items-end justify-center text-white bg-no-repeat absolute inset-0 h-full w-full transition duration-200 ",
        loaded ? "blur-none" : "blur-md"
      )}
    >
      {/* <Image
      src={card.image}
      height="500"
      width="500"
     
      alt="thumbnail"
    /> */}
      {selectedId !== card.id && (
        <div className="p-5 bg-black w-full bg-opacity-25 text-center">
          {card.title}
        </div>
      )}
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Project | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.3,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70] text-white"
      >
        <Link className="link-hover" href={`project/${selected?.id}`}>
          {selected?.snippet}
        </Link>
      </motion.div>
    </div>
  );
};
