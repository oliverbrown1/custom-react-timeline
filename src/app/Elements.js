"use client"
import React, { useEffect, useRef, useState } from "react";
import ElementContent from "./ElementContent.js"
import { motion } from "motion/react"

export default function Elements({dates, content, spacing, main_colors, marker_heights}) {

    // const [isVisible, setIsVisible] = useState(false);
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      };
    return (
        <div className="justify-center items-center flex">
            {/* <div className={`w-5/6 flex`}> */}
            <div className="w-full flex" style={{gap : `${spacing}%`}}>
                {/* <RevealOnScroll><p>hi</p></RevealOnScroll> */}
                <div className="w-1/10">&nbsp;</div>
                {dates.map((date, index) => (
                    // <div className="w-5/6 flex justify-between">
                    <motion.div key={index} variants={variants} initial="hidden" whileInView="visible">
                        {index % 2 === 0 && <div className="flex flex-col items-center"> 
                            <div className="absolute -top-1 border-6 border-gray-700 z-10"></div>
                            {/* vertical line below me */}
                            <div className="absolute w-1" style={{height : `${4*marker_heights[1]}px`, backgroundColor : `${main_colors[0]}`}}></div>
                            <div className="rounded-full border-4" style={{transform : `translateY(${4*marker_heights[1]}px)`, borderColor: `${main_colors[0]}`}}></div>
                            <div style={{transform : `translateY(${4*marker_heights[1]}px)`}}><ElementContent date={date} main_colors={main_colors} content={content[index]} position={"below"}/></div>
                        </div>}
                        {index % 2 !== 0 &&                     <div>
                            <div className="flex flex-col items-center">
                                <div style={{transform : `translateY(-${4*(marker_heights[0]+7)}px)`}}><ElementContent date={date} main_colors={main_colors} content={content[index]} position ={"above"}/></div>
                                <div className="absolute rounded-full border-4 border-slate-500" style={{transform : `translateY(-${4*(marker_heights[0])}px)`, borderColor: `${main_colors[0]}`}}></div>
                                <div className="absolute -translate-y-full w-1" style={{height : `${4*marker_heights[0]}px`, backgroundColor : `${main_colors[0]}`}}></div>
                                <div className="absolute -top-1 border-6 border-gray-700"></div>
                            </div>
                        </div>}
                    </motion.div>
                ))}
                <div className="w-1/10">&nbsp;</div>
            </div>
        </div>
    );
}
