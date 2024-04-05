"use client";
import { ReactTyped } from "react-typed";

const Typed = () => (
  <div className="text-lg text-white">
    <ReactTyped
      strings={[
        "A Full stack Web Developer",
        "Next js full stack Developer",
        "A Mern Stack Developer",
        "A Code Debugger",
      ]}
      typeSpeed={40}
      backSpeed={40}
      attr="placeholder"
      loop
    >
      <input className="bg-transparent text-primary-foreground" type="text" />
      {/* <div></div> */}
    </ReactTyped>
  </div>
);

export default Typed;
