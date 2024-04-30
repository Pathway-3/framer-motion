'use client';

import React from "react";
import Motion from "./MotionFramer/Motion";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <Motion />
      </main>
    </div>
  );
}
