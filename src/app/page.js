"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  

  return (
    <main className={styles.main}>
      <div
       
      >
          <h2 style={{ fontFamily: "ProtestRiot-Regular" }}>1930s</h2>
        {/* Render more items here */}<div style={{display: "flex", flexDirection: "column", top: 0, left: 0}}>
<h2 style={{fontFamily: "ProtestRiot-Regular"}}>1930s</h2>
<h2 style={{fontFamily: "ProtestRevolution-Regular"}}>1940s</h2>
<h2 style={{fontFamily: "ProtestGuerrilla-Regular"}}>1950s</h2>
<h2 style={{fontFamily: "RobotoCondensed-VariableFont_wght"}}>1960s </h2>
<h2 style={{fontFamily: "RubikGlitchPop-Regular"}}>1970s </h2>
<h2 style={{fontFamily: "Honk-Regular-VariableFont_MORFSHLN"}}> 1980s </h2>
<h2 style={{fontFamily: "Pacifico-Regular"}}>Nineteen-nineties</h2>
<h2 style={{fontFamily: "IndieFlower-Regular"}}>2000s (Ice Spice millenium baby grahh) </h2>
<h2 style={{fontFamily: "SourceCodePro-VariableFont_wght"}}> 2010s </h2>
<h2 style={{fontFamily: "Metamorphous-Regular"}}> 2020s </h2>

</div>
      </div>
    </main>
  );
}
