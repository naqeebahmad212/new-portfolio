"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div className={className}>{children}</div>;
};

export default PageWrapper;
