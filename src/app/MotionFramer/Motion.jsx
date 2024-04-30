"use client";

import React from "react";
import { motion, useSpring } from "framer-motion";
import "../../app/styles/main.css";
export default function Motion() {
  return (
    <div>
      <h1>Framer Motion</h1>
      <p>Using Framer Motion with Next.js</p>
      <div className="flex">
        <motion.img
          whileHover={{
            scale: [1, 2, 1],
            rotate: 360,
            transition: { duration: 2 },
          }}
          src="/Beach.png"
        />
        <motion.img
          whileHover={{ scale: [1, 2, 1], transition: { duration: 2 } }}
          src="/Field.png"
        />
        <motion.img
          whileHover={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2 }}
          src="/Mountains.png"
        />
      </div>
    </div>
  );
}
