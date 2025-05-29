"use client";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Work",
    href: "work",
  },
  {
    label: "About",
    href: "about",
  },
];

const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5 },
  },
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 7 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 7 },
  },
};

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navScope, navAnimate] = useAnimate();

  const description = useRef(null);
  const isInView = useInView(description);
  const pathname = usePathname();

  const isProjectPage = pathname.startsWith("/work/") && pathname !== "/work";

  useEffect(() => {
    if (isActive) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
          ease: "easeInOut",
        }
      );
    } else {
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [navAnimate, navScope, isActive]);

  return (
    <header className="">
      <div
        ref={navScope}
        className=" fixed top-0 left-0 right-0 w-full h-0 bg-black z-10 overflow-hidden"
      >
        <div className="container w-full h-full flex flex-col justify-between relative">
          <nav className=" my-20 md:mt-30" ref={description}>
            {navItems.map(({ label, href }) => (
              <div
                key={label}
                className=" text-white relative flex flex-col overflow-hidden"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <motion.span
                  variants={slideUp}
                  animate={isInView ? "open" : "closed"}
                  className=" text-5xl lg:text-6xl"
                >
                  <Button label={label} href={href} />
                </motion.span>
              </div>
            ))}
          </nav>
          <div className=" mb-5 font-semibold">
            <ul className=" text-white">
              <li className="">Resources</li>
              <li>Discover the Museum</li>
              <li>Dark Mode</li>
            </ul>
          </div>
          <div className=" hidden lg:block absolute right-0 bottom-0">
            <motion.h1
              variants={opacity}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              className=" text-9xl uppercase flex flex-col text-white"
            >
              <span>Triselda</span>
              <span>Navarro</span>
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="container fixed top-0 left-0 right-0 w-full z-20">
        <div className=" flex justify-between items-center h-14">
          {isProjectPage ? (
            // <Link
            //   href={"/work"}
            //   className="uppercase text-sm md:text-[16px] font-bold tracking-tighter"
            // >
            //   Back
            // </Link>
            <div className="uppercase text-sm md:text-[16px] font-bold tracking-tighter">
              <Button href={"/work"} label="Back" />
            </div>
          ) : (
            <div className=" w-38 h-5 cursor-pointer relative overflow-hidden">
              <motion.div
                animate={{
                  top: isActive ? "-100%" : "0",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className=" relative w-full h-full"
              >
                <div className=" w-full h-full flex items-center justify-center uppercase">
                  <p className="uppercase text-sm md:text-[16px] font-bold tracking-tighter">
                    TriseldaNavarro
                  </p>
                </div>
                <div className=" w-full h-full flex items-center justify-center uppercase">
                  <p className="absolute top-full uppercase text-sm md:text-[16px] font-bold tracking-tighter text-white">
                    TriseldaNavarro
                  </p>
                </div>
              </motion.div>
            </div>
          )}
          <div className=" flex items-center gap-1 ">
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="h-5 w-12 cursor-pointer relative overflow-hidden "
            >
              <motion.div
                animate={{
                  top: isActive ? "-100%" : "0",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className=" relative w-full h-full"
              >
                <div className=" w-full h-full flex items-center justify-center uppercase">
                  <p className=" text-sm font-semibold text-black">Menu</p>
                </div>
                <div className="w-full h-full flex items-center justify-center uppercase">
                  <p className="text-sm text-white font-semibold absolute top-full ">
                    Close
                  </p>
                </div>
              </motion.div>
            </div>
            {/* <div
              className={`bg-black w-2 h-2 rounded-full ${
                isActive && " bg-white"
              }`}
            ></div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
