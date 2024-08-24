"use client";

import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [, setBar] = useState(true);
  const [dot, setDot] = useState(false);

  const handleDone = () => {
    setTimeout(() => {
      setBar(false);
    }, 3000);
    setTimeout(() => {
      setDot("!");
    }, 2500);
  };

  const [text] = useTypewriter({
    words: [
      "I am Ahmed Khater",
      "Hello Everyone",
      "Hello Devolopers",
      "Welcome in My World ",
    ],
    loop: 10,
    onLoopDone: handleDone,
  });
  return (
    <div
      className="relative h-screen bg-cover bg-center flex justify-center items-center "
      style={{ backgroundImage: "url('/Meeeeee.JPG')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white ">
        <h1 className="text-5xl lg:text-7xl font-bold">
          <span>{text}</span> {dot && dot}
        </h1>
        <p className="text-2xl lg:text-3xl mt-4">Web Developer</p>
      </div>
    </div>
  );
}



// import React from 'react';

// const Hero: React.FC = () => {
//   return (

//     <div
//       className="relative h-screen bg-cover bg-center flex justify-center items-center"
//       style={{ backgroundImage: "url('/Meeeeee.JPG')" }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 text-center text-white ">
//         <h1 id='app' className="text-5xl lg:text-7xl font-bold">
//           I am Ahmed Khater</h1>
//         <p className="text-2xl lg:text-3xl mt-4">Web Developer</p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
