"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import WelcomeZoom from "./WelcomeZoom";
import IntroCard from "./IntroCard";

interface WelcomeScreenProps {
  onFinish: () => void;
}

export default function WelcomeScreen({
  onFinish,
}: WelcomeScreenProps) {
  const [screen, setScreen] = useState<"welcome" | "intro">("welcome");

  useEffect(() => {

    const introTimer = setTimeout(() => {
      setScreen("intro");
    }, 3800);

  
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 9000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <AnimatePresence mode="wait">
        {screen === "welcome" ? (
          <motion.div
            key="welcome"
            className="absolute inset-0"
            exit={{
              opacity: 0,
              scale: 1.35,
              filter: "blur(30px)",
              transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <WelcomeZoom />
          </motion.div>
        ) : (
          <motion.div
            key="intro"
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
              filter: "blur(15px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <IntroCard />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}