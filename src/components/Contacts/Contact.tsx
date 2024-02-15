"use client";
import Image from "next/image";
import React, { FormEvent, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Link from "next/link";
import Form from "./Form";

type Props = {};

const Contact = (props: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={mainControls}
      className="w-full font-comfortaa lg:h-[calc(100vh-225px)] md:flex justify-center md:my-auto md:p-10 p-5 py-10 my-8 gap-6  rounded-lg backdrop-blur-sm bg-white/20 ring-1 ring-black/10 shadow-lg"
      id="contact"
    >
      <motion.div variants={slideInFromLeft(0.3)} className="md:w-1/2 md:mr-10">
        <div className="lg:h-52 py-5  rounded-full text-center">
          <Image
            src={"/assets/pic.png"}
            alt="pic"
            width={100}
            height={100}
            className="h-fit border rounded-full text-center"
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col  gap-4 h-fit">
            <p className="text-3xl font-solitreo text-green-500">Contact</p>
            <div>
              <p className="lg:text-2xl">
                Enjoyed my work? Let’s work together
              </p>
              <p className="lg:text-lg py-3">
                I’m always up for a chat. Pop me an email at
                <Link href={"mailto:divyesh21j91@gmail.com"}>
                  {" "}
                  <p className="font-solitreo inline-block hover:underline">
                    divyesh21j91@gmail.com
                  </p>{" "}
                </Link>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/D1vyeshN" target="_blank">
                <div className="p-2 rounded-lg bg-purple-500 flex items-center">
                  <FaGithub className="w-6 h-6 bg-inherit text-white" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/divyesh-nandanwar"
                target="_blank"
              >
                <div className="p-2 rounded-lg bg-purple-500 flex items-center">
                  <FaLinkedin className="w-6 h-6 bg-inherit text-white" />
                </div>
              </Link>
              {/* <p className="px-3 py-2 rounded-lg bg-purple-500 ">Res</p> */}
            </div>
          </div>
        </div>
      </motion.div>
      {/* form */}
      <Form />
    </motion.div>
  );
};

export default Contact;
