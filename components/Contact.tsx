"use client";
import { AddUserMessage } from "@/utils/db";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from "react";
import PostSubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

interface Result {
  success?: string;
  error?: "string";
}

// write a function to add to number

function Contact() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 0.4], [200, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const translateX = useTransform(scrollYProgress, [0.5, 0.7], [0, 1500]);

  const clientAction = async (formData: FormData) => {
    const result: Result = await AddUserMessage(formData);
    if (result?.error) {
      toast.error(result.error);
    } else if (result.success) {
      toast.success(result.success);
    }
  };
  return (
    <motion.div
      ref={ref}
      style={{
        // translateX,
        scale,
      }}
      className="h-screen w-screen flex flex-col justify-center"
    >
      <h1 className="text-2xl text-[#bed6fb] font-bold text-center pt-[50px] pb-[30px]">
        Contact us
      </h1>{" "}
      <div className="form-container self-center">
        <form action={clientAction} className="form">
          <div className="form-group relative">
            <label className="plc">Name</label>
            <input className="inp" type="text" id="name" name="name" required />
          </div>
          <div className="form-group relative">
            <label htmlFor="email">Company Email</label>
            <input
              className="inp"
              type="text"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group relative">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea name="message" id="textarea" required />
          </div>
          <PostSubmitBtn className="sbButton">Send</PostSubmitBtn>
          {/* <button className="sbButton">

          </button> */}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
