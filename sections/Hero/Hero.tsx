"use client";
import one from "@/assets/img1.jpeg";
import tow from "@/assets/Elegant Portrait Close-Up.jpeg";
import three from "@/assets/Elegant Evening Portrait.jpeg";
import four from "@/assets/Pregnant Woman in Flower Field.jpeg";
import five from "@/assets/Stylish Woman Portrait.jpeg";
import six from "@/assets/Serene Maternity Portrait.jpeg";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./style.scss";

const images = [one.src, tow.src, three.src, four.src, five.src, six.src];

const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "700%",
    transition: { duration: 0.4 },
  },
};

const phrase = "Triselda Navarro";

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  const description = useRef(null);
  const isInView = useInView(description);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section ref={description}>
      <div className="container relative w-full h-screen">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[350px] md:w-[500px] md:h-[500px]  lg:w-[500px] lg:h-[700px]">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`img-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className=" absolute inset-0 size-full object-cover"
            />
          ))}
        </div>
        <div className=" pt-72">
          <div className="full-title bg-white">
            <h1 className=" uppercase mix-blend-difference text-white overflow-hidden">
              {phrase.split(" ").map((word, index) => {
                return (
                  <motion.span
                    key={index}
                    className=" relative overflow-hidden inline-flex"
                  >
                    <motion.span
                      variants={slideUp}
                      initial="initial"
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      className=" mr-[3px] overflow-hidden"
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </motion.span>
                );
              })}
            </h1>
          </div>
          <div className="desc-title bg-white mt-42 lg:mt-48 xl:mt-56">
            <p className="mix-blend-difference text-white">
              An education project around the legacy of Cristobal Balenciaga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
