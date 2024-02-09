"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useAnimation } from "framer-motion";

const useAnimationFrame = (callback) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
}

export default function Home() {

  function randInt() {return Math.random() * 255}

  const [count, setCount] = useState(0);

  useAnimationFrame((deltaTime) => {
    setCount((prevCount) => {
      return prevCount + 0.1;
    });
  });

  

  return (
    <main >
      
<div style={{display: "flex", flexDirection: "column", top: 0, left: 0, backgroundColor: "pink", width: '100vw', height: '100vh'}}>
<motion.div animate={{x: 100* Math.sin(count), y:100* Math.cos(count), transition: 0.1}}>
<h2 style={{ fontFamily: "ProtestRiot-Regular", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})` }}>1930s</h2>
</motion.div>

<h2 style={{fontFamily: "ProtestRiot-Regular" , color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}>1930s</h2>
<h2 style={{fontFamily: "ProtestRevolution-Regular", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}>1940s</h2>
<h2 style={{fontFamily: "ProtestGuerrilla-Regular", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}>1950s</h2>
<h2 style={{fontFamily: "RobotoCondensed-VariableFont_wght", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}>1960s </h2>
<h2 style={{fontFamily: "RubikGlitchPop-Regular", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}>1970s </h2>
<h2 style={{fontFamily: "Honk-Regular-VariableFont_MORFSHLN", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}> 1980s </h2>
<h2 style={{fontFamily: "Pacifico-Regular", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}>Nineteen-nineties</h2>
<h2 style={{fontFamily: "IndieFlower-Regular", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}>2000s (Ice Spice millenium baby grahh) </h2>
<h2 style={{fontFamily: "SourceCodePro-VariableFont_wght", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}> 2010s </h2>
<h2 style={{fontFamily: "Metamorphous-Regular", color: `rgb(${randInt()}, ${randInt()}, ${randInt()})`}}> 2020s </h2>

</div>
    </main>
  );
}
