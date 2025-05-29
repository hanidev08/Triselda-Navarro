"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { sampleData } from "@/sampleData";
import { pageAnimation } from "@/components/Button";
import { useTransitionRouter } from "next-view-transitions";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const router = useTransitionRouter();

  useEffect(() => {
    const calcDrag = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const sliderWidth = innerRef.current.scrollWidth;
        const dragLimit = sliderWidth - containerWidth;
        setMaxDrag(dragLimit > 0 ? dragLimit : 0);
      }
    };
    calcDrag();
    window.addEventListener("resize", calcDrag);
    return () => window.removeEventListener("resize", calcDrag);
  }, []);

  useEffect(() => {
    pageAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen mt-44 h-[60vh] overflow-hidden relative"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }}
        style={{ width: "100%", height: "100%" }}
        dragTransition={{
          bounceStiffness: 200,
          bounceDamping: 30,
          timeConstant: 300,
          power: 0.3,
        }}
        dragMomentum={true}
        dragElastic={0.05}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
        className="absolute top-0 left-4 md:left-1/3 h-full cursor-grab active:cursor-grabbing"
      >
        <div
          ref={innerRef}
          className="flex gap-2 w-max h-full md:pr-[500px] items-center"
        >
          {sampleData.map(({ url, author, slug }, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-[300px] h-[400px] relative"
            >
              <div
                className="relative w-full h-full"
                onPointerUp={() => {
                  if (!isDragging) {
                    router.push(`/work/${slug}`, {
                      onTransitionReady: pageAnimation,
                    });
                  }
                }}
              >
                <Image
                  src={url}
                  alt={`image-${index}`}
                  fill
                  className="object-cover pointer-events-none object-top"
                />
              </div>
              <p className="text-black font-bold ml-1 mt-2">{author}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Page;

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// import one from "@/assets/Confident Woman in Suit.jpeg";
// import two from "@/assets/Elegant Portrait Close-Up.jpeg";
// import three from "@/assets/Elegant Evening Portrait.jpeg";
// import four from "@/assets/Pregnant Woman in Flower Field.jpeg";
// import five from "@/assets/Stylish Woman Portrait.jpeg";
// import six from "@/assets/Confident Woman in Suit.jpeg";
// import seven from "@/assets/Elegant Portrait Close-Up.jpeg";
// import eight from "@/assets/Elegant Evening Portrait.jpeg";
// import nine from "@/assets/Pregnant Woman in Flower Field.jpeg";
// import ten from "@/assets/Stylish Woman Portrait.jpeg";

// const images = [one, two, three, four, five, six, seven, eight, nine, ten];

// const Page = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);
//   const [maxDrag, setMaxDrag] = useState(0);

//   useEffect(() => {
//     const calcDrag = () => {
//       if (containerRef.current && innerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const sliderWidth = innerRef.current.scrollWidth;
//         const dragLimit = sliderWidth - containerWidth;
//         setMaxDrag(dragLimit > 0 ? dragLimit : 0);
//       }
//     };

//     calcDrag();
//     window.addEventListener("resize", calcDrag);
//     return () => window.removeEventListener("resize", calcDrag);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-screen h-screen overflow-hidden bg-[#efefef] relative"
//     >
//       {/* العنصر القابل للسحب بالكامل */}
//       <motion.div
//         className="absolute top-0 left-0 h-full cursor-grab active:cursor-grabbing"
//         drag="x"
//         dragConstraints={{ left: -maxDrag, right: 0 }}
//         style={{ width: "100%", height: "100%" }}
//         dragElastic={0.05} // أقل مرونة لثبات أكثر
//         dragTransition={{
//           bounceStiffness: 200,
//           bounceDamping: 30,
//           timeConstant: 300, // تأخير أكبر للسحب سلس
//           power: 0.3, // تقليل قوة السحب لجعلها أكثر نعومة
//         }}
//         dragMomentum={true} // تمكين الانزلاق بسلاسة بعد الإفلات (inertia)
//       >
//         {/* عنصر الصور فقط */}
//         <div
//           ref={innerRef}
//           className="flex gap-6 px-10 w-max h-full items-center"
//         >
//           {images.map((img, i) => (
//             <Image
//               key={i}
//               src={img}
//               alt={`image-${i}`}
//               className="w-[200px] h-[200px] object-cover rounded-xl pointer-events-none"
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Page;
