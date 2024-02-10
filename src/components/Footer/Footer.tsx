import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

type Props = {};

const Footer = (props: Props) => {
  const path = usePathname();

  return (
    <div className=" w-full h-20 flex items-center md:justify-between">
      <div className="flex justify-between w-10/12 mx-auto font-robotoMono">
        <div className="flex items-center">
          <span className=" text-sm">Divyesh </span>
          <span className=" text-sm">Nandanwar 2024.</span>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-10 px-2 py-1">
            <Link href="https://github.com/D1vyeshN" target="_blank">
              <p className="border px-2 py-1 text-base border-transparent rounded-lg cursor-pointer hover:underline">
                Github
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/divyesh-nandanwar"
              target="_blank"
            >
              <p className="border px-2 py-1 text-base border-transparent rounded-lg cursor-pointer hover:underline">
                Linkedin
              </p>
            </Link>

            {/* <p className="border px-2 py-1 font-mono text-base border-transparent rounded-lg cursor-pointer hover:underline">
            Blog
          </p> */}
          </div>
          <Link
            href={`${path}`}
            className="border px-3 py-3 font-mono text-base border-transparent rounded-full cursor-pointer hover:border-green-500"
          >
            <IoArrowUpOutline className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
