import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import RevealOnScroll from "../effects/RevealOnScroll.js"
import { AnimatePresence, motion } from "motion/react"

export default function ElementContent({date, content, position}) {


    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div className="max-w-64">
            <button onClick={() => setIsVisible(!isVisible)}>{date}</button>
            <AnimatePresence initial={false}>
                {isVisible && (<motion.div
                    initial={{ x: 0, opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition : {duration : 0.5} }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute min-w-50 min-h-25 max-h-50 max-w-100 overflow-y-auto border-gray-700 mt-2 z-10 border-dashed border-2 p-5"
                    style={{
                        top: position === "above" ? "-120%" : "", // Position above or below the button
                    }}
                >{content}</motion.div>)}
            </AnimatePresence>
        </div>
    );
}
