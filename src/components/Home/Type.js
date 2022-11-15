import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "REACT NATIVE / Python Django Developer",
          "Full stack Application Developer",
          "MERN Stack Developer",
          "Quant research and Cosmology Enthusiast",
          "MSc in Mathematics",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
