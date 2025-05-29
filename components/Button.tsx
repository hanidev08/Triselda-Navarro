"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Button = (
  props: {
    label?: string;
    href: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const { label, href } = props;
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      {label}
      {/* <div className="group cursor-pointer relative overflow-hidden [perspective:800px] text-white flex items-center justify-center">
        <p
          className="transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] 
              group-hover:[transform:rotateX(90deg)] group-hover:opacity-0 [transform-origin:top_center]"
        >
          {text}
        </p>
        <p
          className="font-cormorant-sans italic absolute transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
               opacity-0 group-hover:opacity-100 group-hover:[transform:rotateX(0deg)_translateY(0)] [transform:rotateX(-90deg)_translateY(9px)] [transform-origin:bottom_center]"
        >
          {text}
        </p>
      </div> */}
    </Link>
  );
};

export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Button;
