import { gsap } from "gsap";
import type { RefObject } from "react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const progressAnimation = (
  progressNumberRef: RefObject<HTMLDivElement | null>
) => {
  const tl = gsap.timeline();

  if (!progressNumberRef.current) return tl;

  tl.to(
    progressNumberRef.current,
    {
      textContent: "100%",
      duration: 5,
      roundProps: "textContent",
    },
    "<"
  ).to(progressNumberRef.current, {
    y: 24,
    autoAlpha: 0,
  });

  return tl;
};
