"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion, transform } from "framer-motion";
import { IoClose } from "react-icons/io5";

type Props = {};

const Navbar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/#about",
    },
    {
      name: "Projects",
      to: "/#projects",
    },
    {
      name: "Contact",
      to: "/#contact",
    },
    // {
    //   name: "Blog",
    //   to: "/",
    // },
  ];

  // const handleMenu =(id)=>{
  //   setMenu(!menu);
  //   redirect(id)
  // }
  return (
    <motion.div className="z-40 w-full h-20 flex items-center justify-between sticky top-0 shadow-xl backdrop-blur-md bg-white/20 ring-1 ring-black/10 ">
      <div className="flex justify-between items-center w-11/12 mx-auto ">
        <div className="font-solitreo text-xl lg:text-3xl px-4  md:px-2 md:mt-0 flex items-center justify-center  pt-1.5 ">
          <Link href={"/"} className="flex md:flex-row flex-col ">
            <span className="">Divyesh</span>
            <span className="font-bold -mt-1 md:mt-0">Nandanwar</span>
          </Link>
        </div>
        <div className="hidden md:flex font-robotoMono items-center gap-5 lg:gap-10 px-2 py-1">
          {links.map((el, i) => (
            <Link href={el.to} key={i}>
              <p
                className={`border px-3 py-1.5 text-base border-transparent ${
                  theme == "light"
                    ? "hover:border-black"
                    : "hover:border-white"
                } rounded-lg cursor-pointer `}
              >
                {el.name}
              </p>
            </Link>
          ))}
          <motion.div layout>
            <motion.div
              layout
              className={`cursor-pointer p-2 rounded-lg ring-1 ${
                theme == "light" ? "ring-black" : "ring-white"
              }  `}
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
            >
              {theme === "dark" ? (
                <LuSun className="w-5 h-5 " />
              ) : (
                <LuMoon className="w-5 h-5" />
              )}
            </motion.div>
          </motion.div>
        </div>
        {/* mobile */}
        <div className="flex items-center gap-6 md:hidden ">
          <motion.div layout>
            {theme === "dark" ? (
              <motion.div
                layout
                className="cursor-pointer p-2 rounded-lg ring-1  ring-white"
                onClick={() => setTheme("light")}
              >
                <LuSun className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                layout
                className="cursor-pointer p-2 rounded-lg ring-1 ring-black"
                onClick={() => setTheme("dark")}
              >
                <LuMoon className="w-5 h-5" />
              </motion.div>
            )}
          </motion.div>
          <motion.div
            onClick={() => setMenu(!menu)}
            className={`md:hidden cursor-pointer p-2 rounded-lg ring-1 ${
              theme === "light" ? "ring-black" : "ring-white"
            }`}
          >
            {menu ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <RxHamburgerMenu className="w-5 h-5" />
            )}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                // background: "rgba(255, 255, 255, 0.2)",
                // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                // backdropFilter: "blur(10px)",
                // WebkitBackdropFilter: "blur(5px)",
                // border: "1px solid rgba(255, 255, 255, 0.3)",
                transition: {
                  ease: "backIn",
                  duration: 0.5,
                },
              },
              exit: {
                x: 100,
                opacity: 0,
                transition: {
                  ease: "backInOut",
                  duration: 0.9,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden  fixed overscroll-y-none top-20 right-0 w-screen h-[calc(100vh-5rem)] flex flex-col items-center z-50 bg-gradient-to-b from-purple-500/95 to-emerald-500/95 "
          >
            <div className="w-full h-fit mt-16 mx-auto flex flex-col items-center gap-4 text-4xl py-4 font-robotoMono ">
              {links.map((el, i) => (
                <Link href={el.to} key={i} onClick={() => setMenu(!menu)}>
                  <p className="px-2 py-1 font-bold text-4xl ">{el.name}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
