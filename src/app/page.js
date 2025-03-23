"use client"
import Elements from "./components/Elements.js"
import Timeline from "./Timeline.js"
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const dates =  ["2012","2013","2015","2018","2019","2020","2022","2024","2025"]
  const content = [
    "Company X was founded in 2012, starting with a small team of passionate developers.",
    "In 2013, Company X secured its first round of funding, expanding the team and the product lineup.",
    "Company X launched its flagship product in 2015, which gained attention from major players in the industry.",
    "In 2018, Company X reached 1 million users and expanded its presence internationally.",
    "2019 saw the launch of a new product line, significantly increasing revenue and market share.",
    "In 2020, the company shifted to remote work due to the pandemic, focusing on new features and a revamped UI.",
    "Company X was acquired by TechCorp in 2022, enabling rapid growth and global expansion.",
    "By 2024, Company X introduced a new AI-powered platform, disrupting the market and attracting new clients.",
    "In 2025, Company X celebrated its 13th anniversary, cementing its position as a market leader."
  ];
  
 


  return (
    <Timeline dates={dates} content={content} spacing={20}></Timeline>
  );
}
