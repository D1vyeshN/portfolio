"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaArrowLeft, FaCode } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { ImSphere } from "react-icons/im";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { projects as projectsData } from "../../../utils/data";
import { usePathname } from "next/navigation";
import { stack } from "../../../components/Projects/Projects";

type Props = {};

const Page = (props: Props) => {
  const path = usePathname();
  let a = path.slice(10);
  const projects = projectsData;
  const project = projects.find((e) => e.id === a);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full md:h-full mb-20 flex md:flex-row-reverse flex-col-reverse justify-between pb-10 md:p-6 lg:p-10  lg:gap-6"
    >
      {/* fixed links */}
      <motion.div
        variants={slideInFromLeft(0.2)}
        className="md:w-4/12 h-fit  m-5 p-5 lg:p-10 rounded-xl flex flex-col items-center gap-8 md:sticky md:top-32 lg:top-36 shadow-lg backdrop-blur-md bg-white/20 ring-1 ring-black/10"
      >
        <h1 className="text-xl font-semibold">Take a look at this project</h1>
        <div className="w-full flex flex-col justify-center items-center text-white font-semibold gap-6">
          <Link href={project?.liveDemo!} target="_blank" className="w-full">
            <div className="w-full px-5 py-4 text-center bg-purple-600 hover:bg-purple-500 cursor-pointer rounded-lg flex items-center justify-between text-base shadow-md shadow-black/50">
              <ImSphere className="w-5 h-5 bg-inherit" />
              Live demo
              <HiExternalLink className="w-5 h-5 bg-inherit" />
            </div>
          </Link>
          <Link href={project?.github!} target="_blank" className="w-full">
            <div className="w-full px-5 py-4 text-center  bg-gray-900 hover:bg-gray-800 cursor-pointer ease-in-out transition-transform rounded-lg flex items-center justify-between text-base shadow-md shadow-black/50">
              <BsGithub className="w-5 h-5 bg-inherit" /> Code
              <HiExternalLink className="w-5 h-5 bg-inherit" />
            </div>
          </Link>
        </div>
      </motion.div>
      {/* Descriptions */}
      <motion.div
        variants={slideInFromRight(0.2)}
        className="md:w-8/12 rounded-xl overflow-hidden m-5 flex flex-col h-fit shadow-lg backdrop-blur-md bg-white/20 ring-1 ring-black/10 relative"
      >
        <div className="h-[50vh] overflow-hidden rounded-t-xl bg-gradient-to-r from-purple-500 to-emerald-400 p-5 flex justify-center ">
          <Image
            src={project?.img!}
            alt="pic"
            width={1000}
            height={1000}
            className="w-fit rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-4 h-fit  min-h-[80vh] rounded-xl p-6 lg:p-10 overflow-hidden">
          <div className="text-3xl lg:text-4xl text-purple-600 flex">
            {project?.tech.map((el,i) => (
              <p className="w-10" key={i}>{stack[el]}</p>
            ))}
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-poppins font-bold">
              {project?.name}
            </h1>
            <p className="text-sm lg:text-lg py-3 font-comfortaa font-semibold">
              {project?.des}
            </p>
          </div>
          <div className="md:px-5 md:mb-10">
            <div className="font-comfortaa ">
              <p className="md:text-base text-sm font-semibold">Key Features:</p>
              {project?.feat?.map((fe) => (
                <p className="md:text-sm text-xs py-0.5">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fe}
                </p>
              ))}
            </div>

            <div className="flex capitalize font-comfortaa mt-5 flex-wrap items-center">
              <p className="md:text-base text-sm font-semibold">TechStack: </p>
              {project?.tech.map((te) => (
                <p className="md:text-sm text-xs">&nbsp;&nbsp;{te},</p>
              ))}
            </div>
          </div>
        </div>
        <Link href={"/"}>
          <div className="absolute left-5 top-5 rounded-lg  bg-gray-900 hover:bg-gray-800 cursor-pointer shadow-md p-3 z-10 shadow-black/60 text-white ">
            <FaArrowLeft className="w-6 h-6" />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Page;
