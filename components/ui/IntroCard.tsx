"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Great_Vibes, Allura } from "next/font/google";

import Particles from "./Particles";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
});

const IntroCard = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[180px]" />

      {/* Particles */}
      <Particles />

      {/* Card */}
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Photo */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/welcom.png"
            alt="Welcome"
            width={260}
            height={260}
            priority
            className="
              w-40
              h-40
              sm:w-52
              sm:h-52
              md:w-60
              md:h-60
              lg:w-72
              lg:h-72
              rounded-full
              object-cover
              border-4
              border-white
              shadow-[0_0_80px_rgba(255,255,255,.25)]
            "
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className={`
            ${greatVibes.className}
            mt-10
            text-center
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
            font-normal
            bg-gradient-to-r
            from-cyan-300
            via-white
            to-blue-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]
            select-none
          `}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Abhimanyu Pandey
        </motion.h1>

        {/* Typing */}
        <motion.div
          className="mt-5 text-blue-400 text-2xl font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Welcome To My Portfolio",
              300,
              "React • Next.js • MERN",
              300,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 250 }}
          transition={{
            delay: 1.2,
            duration: 1.4,
          }}
          className="h-[3px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full mt-8"
        />

        {/* Paragraph */}
        <motion.p
          className={`
            ${allura.className}
            mt-6
            text-gray-200
            text-3xl
            sm:text-4xl
            text-center
            max-w-2xl
            leading-relaxed
            tracking-wide
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Crafting beautiful web experiences with modern technologies.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default IntroCard;