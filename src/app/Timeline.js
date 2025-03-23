"use client"
import Elements from "./components/Elements.js"
import React, { useState, useEffect, useRef } from 'react';

export default function Timeline({spacing, dates, content}) {
  const [timelineWidth, setTimelineWidth] = useState(0);
  const containerRef = useRef(null);


  useEffect(() => {

    const loadTimeline = () => {
      if(containerRef.current){

        setTimelineWidth(containerRef.current.scrollWidth);
      }
    };

    loadTimeline();


  }, []);



  return (
    <div className="flex justify-center items-center h-full h-screen bg-gray-200 m-10 overflow-x-auto" ref={containerRef}>
      <div className="relative w-full" >
        <div className="h-1 bg-slate-500 w-full timeline" style={{ width: `${timelineWidth}px` }}></div>

        <Elements dates={dates} content={content} spacing={spacing}/>
  
      </div>
    </div>
  );
}
