"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FeedComponent() {
  const [n, setN] = useState<number>(10);

  // Pass setN to the custom hook
  useScrollToBottom(setN);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-2">
      {Array.from({ length: n }, (_, i) => (
        <TempCard key={i} number={i} />
      ))}
    </div>
  );
}

interface TempCardProps {
  number: number;
}

function TempCard({ number }: TempCardProps) {
  return (
    <motion.div
      className="bg-blue-200 rounded-lg overflow-hidden h-96 w-full transition-all duration-200 shadow-2xl transform-gpu hover:bg-green-500 md:hover:scale-125 hover:z-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {number}
    </motion.div>
  );
}

// Modify the useScrollToBottom hook to accept setN
const useScrollToBottom = (
  setN: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Increment n by a certain number (e.g., 5) when scrolling to the bottom
        setN((prevN) => prevN + 5);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setN]); // Make sure to include setN in the dependency array
};
