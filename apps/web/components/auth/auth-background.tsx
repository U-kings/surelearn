"use client";

import { motion } from "motion/react";

export default function AuthBackground() {
  return (
    <>
      {/* Top Left */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#2EAFB4]/20 blur-[120px]"
      />

      {/* Bottom Right */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-300/20 blur-[150px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2EAFB4]/10 blur-[120px]"
      />
    </>
  );
}