import React, { useEffect, useRef } from "react";
import { progressAnimation } from "./animations";

type LoaderProps = {
  timeline: gsap.core.Timeline | null;
};

export const Loader: React.FC<LoaderProps> = ({ timeline }) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const progressNumberRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (timeline && progressNumberRef.current) {
      timeline.add(progressAnimation(progressNumberRef), 0);
    }
  }, [timeline]);

  return (
    <div
      ref={loaderRef}
      className="w-full h-screen flex justify-center items-center bg-white"
    >
      <div ref={progressNumberRef} className=" text-2xl md:text-4xl">
        0
      </div>
    </div>
  );
};
