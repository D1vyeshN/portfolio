"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { Laptop } from "@/modals/Laptop";
import {
  IoDocumentTextOutline,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiThreedotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
} from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { DiSass } from "react-icons/di";

type Props = {};

const About = (props: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end end"],
  // });

  // const paraOne = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  // const paraTwo = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div className="md:py-24 md:overflow-hidden" id="about">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={mainControls}
        // whileInView={"visible"}
        className="h-fit lg:h-[calc(100vh-120px)] flex flex-col items-center justify-center md:flex-row md:justify-between md:p-16 p-5 py-20 gap-6 rounded-lg backdrop-blur-sm bg-white/20 ring-1 ring-black/10 shadow-lg "
      >
        <motion.div
          // style={{ translateX: paraOne }}
          // variants={slideInFromLeft(0.5)}
          variants={slideInFromRight(0.5)}
          className="md:w-5/12 w-full h-[30vh] md:h-full md:min-h-[30vh]  flex items-center justify-center"
        >
          <Canvas>
            <Suspense fallback={null}>
              <Laptop />
            </Suspense>
          </Canvas>
        </motion.div>
        {/* About me */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          // style={{ translateX: paraTwo }}
          className="md:w-1/2 md:my-10 mx-6 w-full"
        >
          <div className=" md:w-full flex flex-col gap-2 md:gap-4 h-fit">
            <div className="flex text-2xl lg:text-4xl my-5 gap-2 flex-wrap">
              <FaHtml5 className="text-purple-500 " />
              <IoLogoCss3 className="text-purple-500 " />
              <IoLogoJavascript className="text-purple-500 " />
              <DiSass className="text-purple-500 " />
              <TbBrandTailwind className="text-purple-500 " />
              <TbBrandReact className="text-purple-500 " />
              <TbBrandRedux className="text-purple-500 " />
              <IoLogoNodejs className="text-purple-500 " />
              <SiMongodb className="text-purple-500 " />
              <BiLogoTypescript className="text-purple-500 " />
              <TbBrandNextjs className="text-purple-500 " />
              <TbBrandFramerMotion className="text-purple-500 " />
              <TbBrandGraphql className="text-purple-500 " />
              <SiThreedotjs className="text-purple-500 " />
            </div>
            <motion.h1
              //
              // className="md:text-3xl text-[#8ae59d] font-solitreo"
              className="md:text-3xl text-green-500 font-solitreo"
            >
              About me
            </motion.h1>
            <div>
              <p className="lg:text-xl text-base text-justify font-comfortaa font-bold ">I&apos;m a web developer who aims to combine the beauty of design with the logical perfection of coding. Training myself every day and pushing my own limits to discover new ways of creating a great experience.</p>
              <p className="lg:text-lg text-sm py-3 pt-8 text-justify font-comfortaa">
                Beyond coding, you&apos;ll often find me exploring new places, diving
                into a good book, or strategizing in my favorite games. I am
                currently seeking opportunities to bring my skills and
                enthusiasm to a tech company and I&apos;m excited about the prospect
                of taking on new challenges and pushing myself to grow
                professionally.
              </p>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-5 py-3 font-grotrsk text-white shadow-md mb-3 md:mb-0 rounded-lg bg-purple-500 flex items-center "
              >
                <IoDocumentTextOutline className="w-6 bg-inherit" />
                Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
