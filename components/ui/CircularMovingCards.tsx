"use client";

import { cn } from "@/lib/utils";

export const CircularMovingCards = ({
  items,
  className,
}: {
  items: {
    name: string;
    img?: string;
    quote?: string;
    title?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[300px] w-full items-center overflow-hidden",
        className
      )}
    >

      <div
        className="
          flex
          w-max
          gap-5
          animate-slide
          hover:[animation-play-state:paused]
          active:[animation-play-state:paused]
        "
      >

        {[...items, ...items].map((item, idx) => (

          <div
            key={idx}
            className="
              flex
              h-[130px]
              w-[130px]
              flex-shrink-0
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-slate-800
              bg-[#04071d]
              p-4
              shadow-lg
              transition-transform
              duration-300
              hover:scale-110
            "
          >
{(item.img || item.icon || item.image) && (
  <img
    src={item.img || item.icon || item.image}
    alt={item.name}
    className="h-12 w-12 object-contain mb-2"
  />
)}

            <h3 className="text-sm font-bold text-white text-center">
              {item.name}
            </h3>


            {item.title && (
              <p className="mt-1 text-xs text-gray-400 text-center">
                {item.title}
              </p>
            )}

          </div>

        ))}

      </div>

    </div>
  );
};