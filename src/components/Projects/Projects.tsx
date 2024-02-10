"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { motion, stagger, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import {
  TbArrowUpRight,
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
} from "react-icons/tb";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiChakraui, SiMongodb, SiThreedotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { projects as projectsData } from "../../utils/data";

type Props = {};

export const stack: any = {
  reactjs: <TbBrandReact className="w-6 h-6" />,
  nextjs: <TbBrandNextjs className="w-6 h-6" />,
  css: <IoLogoCss3 className="w-6 h-6" />,
  html: <FaHtml5 className="w-6 h-6" />,
  javascript: <IoLogoJavascript className="w-6 h-6" />,
  tailwindcss: <TbBrandTailwind className="w-6 h-6" />,
  redux: <TbBrandRedux className="w-6 h-6" />,
  nodejs: <IoLogoNodejs className="w-6 h-6" />,
  mongodb: <SiMongodb className="w-6 h-6" />,
  typescript: <BiLogoTypescript className="w-6 h-6" />,
  framermotion: <TbBrandFramerMotion className="w-6 h-6" />,
  graphql: <TbBrandGraphql className="w-6 h-6" />,
  sass: <DiSass className="w-6 h-6" />,
  threejs: <SiThreedotjs className="w-6 h-6" />,
  chakraUI: <SiChakraui className="w-6 h-6" />,
};

const Projects = (props: Props) => {
  const projects = projectsData;

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  return (
    <motion.div className="md:pt-20 md:pb-10 w-full h-fit" id="projects">
      <div className=" flex justify-center p-4 my-5 gap-6">
        <div className="my-5 mx-auto flex items-center">
          <div className="flex flex-col items-center gap-8 h-fit">
            <p className="text-3xl -mb-4 font-solitreo text-green-500">
              Projects
            </p>
            <div>
              <p className="text-2xl text-center">
                Take a look at my highlighted projects
              </p>
            </div>
            <motion.div
              ref={containerRef}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate={mainControls}
              className="flex w-full h-fit flex-wrap justify-center gap-8"
            >
              {projects?.map((el, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                >
                  <Link href={`/projects/${el.id}`}>
                    <div className="mx-auto w-11/12 md:w-[20rem] md:h-fit lg:w-[24rem] lg:h-[21.5rem] p-5 rounded-xl bg-white/20 ring-1 ring-black/5 shadow-md border-2 border-transparent hover:border-green-500 hover:shadow-green-500 transition-shadow relative group ease-in z-0">
                      <div className="h-1/2 overflow-hidden rounded-t-xl bg-gradient-to-r from-purple-500 to-emerald-300 px-5 pt-5 pb-2 justify-center flex ">
                        <Image
                          src={el.img}
                          alt="pic"
                          width={1000}
                          height={1000}
                          className="w-2/3 rounded-xl shadow-lg"
                        />
                      </div>
                      <div className="h-1/2  py-2 flex flex-col gap-2">
                        <div className="flex mt-1 gap-2 h-8 items-center ">
                          {el.tech.map((a, i) => (
                            <p key={i} className="text-purple-500">
                              {stack[a]}
                            </p>
                          ))}
                        </div>
                        <h1 className="text-lg -mt-1 font-poppins ">
                          {el.name}
                        </h1>
                        <p className="text-sm text-justify font-comfortaa">
                          {el.des}
                        </p>
                      </div>
                      <div className="hidden group-hover:flex absolute right-4 top-4  flex-col gap-2 ease-in-out transition-transform ">
                        <Link href={el?.github} target="_blank" className="z-30">
                          <div className="rounded-lg z-30  bg-black shadow-md p-4 hover:bg-slate-800">
                            <BsGithub className="w-6 h-6 text-white" />
                          </div>
                        </Link>
                        <div className="rounded-lg  bg-black shadow-md p-4 hover:bg-slate-800">
                          <TbArrowUpRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <Link href="https://github.com/D1vyeshN" target="_blank">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-5 py-3 mt-4 font-grotrsk text-white rounded-lg bg-purple-500 flex items-center shadow-md hover:bg-purple-400 cursor-pointer"
              >
                See all{" "}
                <RiArrowRightLine className="w-6 h-6 ml-1 p-0 m-0 bg-inherit" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
