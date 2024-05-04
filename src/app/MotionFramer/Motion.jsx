"use client";

import React, { useState } from "react";
import { motion, useSpring } from "framer-motion";
import "../../app/styles/main.css";
export default function Motion() {
  const spring = useSpring(0, { stiffness: 300, damping: 15 });

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
          src="/Field.png"
          transition={{ duration: 2 }}
          style={spring}
          whileHover={{
            scale: [1, 1.5, 1],
            transition: { duration: 2 },
          }}
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
