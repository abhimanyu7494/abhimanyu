"use client";

import { useState } from "react";
import WelcomeScreen from "@/components/ui/WelcomeScreen";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/Skills";

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <WelcomeScreen
        onFinish={() => setShowIntro(false)}
      />
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;