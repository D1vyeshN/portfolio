"use client";
import { Model } from "@/modals/Model";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React, { Suspense, useEffect } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Loader from "../Loader/Loader";
import { useControls } from "leva";
import { TbArrowRight, TbArrowUpRight } from "react-icons/tb";

type Props = {};

const Hero = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" h-fit md:h-[calc(100vh-80px)] flex md:flex-row-reverse flex-col justify-center md:justify-between pb-10 md:p-10 md:mb-20 gap-6 z-0"
    >
      {/* 3D model */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="md:w-6/12  min-h-[40vh] md:min-h-[30vh] m-5"
      >
        <Canvas camera={{ position: [5, 3, 5] }} className="z-0 w-full">
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </motion.div>
      {/* Into */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="md:w-1/2  m-5 flex items-center"
      >
        <div className="flex flex-col gap-4 h-fit">
          <h1 className="text-3xl lg:text-7xl py-3 font-solitreo text-transparent bg-clip-text font-black bg-gradient-to-r from-purple-500 to-green-400">
            Hi, I’m Divyesh
          </h1>
          <div>
            <p className="text-lg lg:text-4xl uppercase font-comfortaa">
              Front-end web developer 
            </p>
            <p className="text-sm lg:text-lg py-3 text-justify mt-2 font-comfortaa">
              Over a year of experience crafting responsive and
              dynamic websites. With technologies like React.js, Node.js,
              MongoDB, JavaScript, Tailwind CSS, TypeScript, and Next.js, I bring ideas to
              life in the digital realm.
            </p>
            
          </div>
          <div className="flex gap-4 font-grotrsk">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-5 py-3 rounded-lg bg-white/20 flex items-center shadow-md"
            >
              <IoDocumentTextOutline className="w-5 h-5 mr-2" />
              Resume
            </motion.button>
            <Link href={"/#contact"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-5 py-3 rounded-lg bg-purple-500 flex items-center justify-center shadow-md"
              >
                Get in touch
                <TbArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
