import React, { useEffect, useRef, useState } from "react";
import ElementContent from "./ElementContent.js"
import { motion } from "motion/react"

export default function Elements({dates, content, spacing}) {


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
                        {index % 2 === 0 && <div className="relative -top-2 flex flex-col items-center h-2/3 justify-center"> 
                            <div className="border-6 border-gray-700"></div>
                            <div className="w-1 h-48 bg-slate-500"></div>
                            <div className="rounded-full border-4 border-slate-500"></div>
                            <ElementContent date={date} content={content[index]} position={"below"}/>
                        </div>}
                        {index % 2 !== 0 &&                     <div>
                            <div className="absolute top-2 -translate-y-full h-2/3 flex flex-col items-center justify-center">
                                <ElementContent date={date} content={content[index]} position ={"above"}/>
                                <div className="rounded-full border-4 border-slate-500"></div>
                                <div className="w-1 h-48 bg-slate-500"></div>
                                <div className="border-6 border-gray-700"></div>
                            </div>
                        </div>}
                    </motion.div>
                ))}
                <div className="w-1/10">&nbsp;</div>
            </div>
        </div>
    );
}
