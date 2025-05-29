"use client";
import one from "@/assets/Confident Woman in Suit.jpeg";
import tow from "@/assets/Elegant Portrait Close-Up.jpeg";
import three from "@/assets/Elegant Evening Portrait.jpeg";
import four from "@/assets/Pregnant Woman in Flower Field.jpeg";
import five from "@/assets/Stylish Woman Portrait.jpeg";
import six from "@/assets/Serene Maternity Portrait.jpeg";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./style.scss";

const images = [one.src, tow.src, three.src, four.src, five.src, six.src];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <div className="container relative w-full h-[calc(100vh-40px)] top-14 flex flex-col justify-around items-center">
        <div></div>
        <div className="absolute">
          <div className=" w-[250px] h-[350px] md:w-[500px] md:h-[500px]  lg:w-[500px] lg:h-[700px]">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`img-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === current ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
          </div>
        </div>
        <div className="full-title bg-white">
          <h1 className=" uppercase mix-blend-difference text-white">
            Triselda Navarro
          </h1>
        </div>
        <div className="desc-title bg-white">
          <p className="mix-blend-difference text-white">
            An education project around the legacy of Cristobal Balenciaga
          </p>
        </div>
      </div>
    </section>
  );
};
