"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const Nav = () => {
  const router = useTransitionRouter();

  const routes = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
  ];
  return (
    <div className=" p-6">
      <ul className=" flex gap-4">
        {routes.map((route) => (
          <li key={route.label}>
            <Link
              href={route.url}
              onClick={(e) => {
                e.preventDefault();
                router.push(route.url, {
                  onTransitionReady: pageAnimation,
                });
              }}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const pageAnimation = () => {
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

export default Nav;
