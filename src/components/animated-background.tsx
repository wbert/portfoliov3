"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 z-[-1] bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "400% 400%",
      }}
    />
  );
}
