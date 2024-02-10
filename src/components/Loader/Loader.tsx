"use client";
import { useProgress } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import "../../app/globals.css";
import { redirect, usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Loader = ({ children }: Props) => {
  const [stared, setStared] = useState(false);
  const { active, progress, errors, item, loaded, total } = useProgress();
  const path = usePathname();

  useEffect(() => {
    setTimeout(() => {
      if (progress === 100) {
        setStared(true);
      }
    }, 500);
    // if (path !== "/") {
    //   setStared(true);
    //   redirect("/");
    // }
  }, [progress, total, loaded, item]);

  
  return (
    <ThemeProvider defaultTheme="dark">
      {!stared &&<div
        className={`h-screen flex items-center justify-center md:text-7xl  ${
          stared ? "hidden" : ""
        }`}
      >
        LOADING... --&gt; {Math.round(progress)}%
      </div>}
      {stared && (
        <motion.div>
          <Navbar />
          <div className="lg:w-11/12 mx-auto my-0 min-h-fit  ">{children}</div>
          <Footer />
        </motion.div>
      )}
      {/* <StarsCanvas /> */}
    </ThemeProvider>
  );
};

export default Loader;
