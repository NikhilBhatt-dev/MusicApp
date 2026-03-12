"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const MusicSchoolContent = [
  {
    title: "Interactive Music Lessons",
    description:
      "Learn music the fun and interactive way! Our platform enables students to engage with professional instructors in real time. Ask questions, get live feedback, and progress faster with personalized sessions designed to match your skill level.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--pink-500))] text-white">
        Interactive Music Lessons
      </div>
    ),
  },
  {
    title: "Practice Tools & Resources",
    description:
      "Access a library of exercises, sheet music, practice tracks, and tutorials tailored to your instrument and goals. Whether you're learning piano, guitar, or vocals, we provide everything you need to practice effectively at home.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Practice Tools & Resources
      </div>
    ),
  },
  {
    title: "Progress Tracking",
    description:
      "Stay motivated and on track! Our smart progress tracker lets you and your instructors monitor growth, set goals, and celebrate achievements. Visual feedback and analytics ensure you're always moving forward with confidence.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--lime-500))] text-white">
        Progress Tracking
      </div>
    ),
  },
  {
    title: "Live Performances & Recitals",
    description:
      "Showcase your skills in our virtual and on-campus concerts! Perform solo or with your band and gain real-world stage experience. Build confidence, get feedback, and connect with a vibrant community of music lovers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] text-white">
        Live Performances & Recitals
      </div>
    ),
  },
];


function WhyChooseUs() {
  return (
    <div>
     <StickyScroll content={MusicSchoolContent}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs
