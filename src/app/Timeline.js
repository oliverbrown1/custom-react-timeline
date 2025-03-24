"use client"
import Elements from "./components/Elements.js"
import React, { useState, useEffect, useRef } from 'react';

export default function Timeline({spacing, dates, content, marker_heights, main_colors, styles}) {
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
    <div className="flex justify-center items-center h-screen bg-gray-200 m-10 overflow-x-auto" style={styles} ref={containerRef}>
      <div className="relative w-full" >
        <div className="h-1 w-full timeline" style={{ width: `${timelineWidth}px` , backgroundColor : `${main_colors[0]}`}}></div>

        <Elements dates={dates} content={content} spacing={spacing} main_colors={main_colors} marker_heights={marker_heights}/>
  
      </div>
    </div>
  );
}
