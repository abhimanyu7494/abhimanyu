"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const WelcomeZoom = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black">
    
      {/* Background Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl"
        animate={{
          scale: [1, 1.5, 2.5],
          opacity: [0.2, 0.4, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeOut",
        }}
      />

      {/* WELCOME TEXT */}
      <motion.h1
  initial={{
    scale: 0.2,
    opacity: 0,
  }}
  animate={{
    scale: [0.2, 1, 8],  
    opacity: [0, 1, 0],  
  }}
  transition={{
    duration: 4,
    ease: "easeInOut",
    times: [0, 0.4, 1],
  }}
  className={`
    ${bebas.className}
    text-white
    uppercase
    leading-none
    tracking-[0.25em]
    text-[22vw]
    sm:text-[18vw]
    md:text-[15vw]
    lg:text-[12vw]
    xl:text-[10vw]
    select-none
  `}
  style={{
    textShadow: `
      0 0 15px rgba(255,255,255,.35),
      0 0 40px rgba(255,255,255,.25),
      0 0 80px rgba(59,130,246,.25)
    `,
  }}
>
  WELCOME
</motion.h1>

      {/* FLASH EFFECT */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 0.8, 0],
        }}
        transition={{
          duration: 4,
          times: [0, 0.7, 0.85, 1],
        }}
      />
    </div>
  );
};

export default WelcomeZoom;