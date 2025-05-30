"use client";
import { Hero } from "@/sections/Hero";
import React, { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { Loader } from "@/sections/Loader";
import { Header } from "@/sections/Header";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoaderFinished(true);
        },
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <>
      
      {loaderFinished ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <Loader timeline={timeline} />
      )}
    </>
  );
}
