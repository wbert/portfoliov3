"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string;
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className="space-y-1">
      <div className="h-10 overflow-hidden text-4xl font-bold tracking-tight sm:h-11 sm:text-5xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={words[index]}
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.45 }}
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="text-3xl font-semibold tracking-tight text-foreground/95 sm:text-4xl">
        I&apos;m {text}
      </p>
    </div>
  );
}
