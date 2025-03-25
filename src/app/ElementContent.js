// import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import RevealOnScroll from "../effects/RevealOnScroll.js"
import { AnimatePresence, motion } from "motion/react"

export default function ElementContent({date, content, main_colors, position}) {


    const [isVisible, setIsVisible] = useState(false);
    const [stayVisible, setStayVisible] = useState(false);

    
    return (
        <div className="max-w-64">
            <motion.div className="flex flex-col ">
                <button onMouseEnter={() => setIsVisible(!isVisible)} onMouseLeave={() => setIsVisible(!isVisible)} onClick={() => setStayVisible(!stayVisible)} className="font-bold text-xl">{date}</button>
                <div className={`-translate-y-full border-t-3 rounded-xl transition-all duration-300 ease-in-out ${stayVisible ? 'w-full' : 'w-0'}`} style={{borderColor : `${main_colors[1]}`}}></div>
            </motion.div>
            <AnimatePresence initial={false}>
                {(stayVisible || isVisible) && (<motion.div
                    initial={{ x: 0, opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition : {duration : 0.5} }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute min-w-50 min-h-25 max-h-50 max-w-100 overflow-y-auto mt-2 z-50 border-solid border-2 p-2"
                    style={{
                        top: position === "above" ? "120%" : "", 
                        left: position === "above" ? "80%" : "",// Position above or below the button
                        borderColor : `${main_colors[1]}`
                    }}
                >{content}</motion.div>)}
            </AnimatePresence>
        </div>
    );
}
