"use client";

import BlurIn from "@/components/ui/blur-in";
import Particles from "@/components/ui/particles";
import { useEffect, useState } from "react";

export default function HeroPage() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    "Savor reading",
    "Explore writing",
    "Immerse in great stories",
    "Discover knowledge",
    "Experience adventure",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [words.length]);

  return (
    <div className="h-screen">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <div className="flex flex-col items-center justify-between space-y-10">
          <BlurIn
            key={wordIndex} // Add key to force re-render on text change
            word={words[wordIndex]}
            className="text-7xl  text-white"
          />

          <button className="bg-white p-4 text-semibold rounded-xl shadow-xl duration-200 transform-gpu ease-in-out transition hover:bg-black hover:border hover:text-white hover:shadow-slate-500/50">
            Get Started
          </button>
        </div>
        <Particles
          className="absolute inset-0 -z-10"
          quantity={500}
          ease={80}
          color="#f0eded"
          refresh
        />
      </div>
    </div>
  );
}
