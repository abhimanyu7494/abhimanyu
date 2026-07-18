"use client";

import React from "react";

import { skills, companies } from "@/data";
import { CircularMovingCards } from "./ui/CircularMovingCards";

const Skills = () => {
  return (
    <section id="skills" className="py-20">

      <h1 className="heading">
        Technologies &
        <span className="text-purple"> skills I use</span>
      </h1>


      <div className="flex flex-col items-center">

        {/* Skills Cards */}
        <div
          className="
            h-[50vh]
            md:h-[30rem]
            w-full
            rounded-md
            flex
            items-center
            justify-center
            relative
            overflow-hidden
            mt-10
          "
        >
          <CircularMovingCards items={skills} />
        </div>


        {/* Companies */}
        <div
          className="
            w-full
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-10
            gap-y-8
            md:gap-x-16
            lg:gap-x-24
          "
        >

          {companies.map((company) => (
            <div
              key={company.id}
              className="
                flex
                items-center
                justify-center
                gap-3
                min-w-fit
                transition-transform
                duration-300
                hover:scale-105
              "
            >

              <img
                src={company.img}
                alt={company.name}
                className="
                  h-8
                  w-auto
                  md:h-10
                  opacity-80
                  transition-all
                  duration-300
                  hover:opacity-100
                "
              />


              <img
                src={company.nameImg}
                alt={company.name}
                className="
                  h-8
                  w-auto
                  md:h-10
                  opacity-90
                  transition-all
                  duration-300
                  hover:opacity-100
                  drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
                "
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;