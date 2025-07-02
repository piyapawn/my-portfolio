'use client'
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function MiniProfile() {
  return (
    <div id="about" className="w-full h-[420px] m-auto bg-blue-500/50 py-4">
      <div className="m-auto max-w-[744px] min-w-[350px] size-full bg-white p-2 rounded-lg shadow-xl">
        <span className="text-2xl text-[#344054]">About me</span>
        <p className="text-[#344054]"> Software developer with experiences building responsive and dynamic web applications using
          React.js, Next.js, TypeScript, and RESTful APIs. Passionate about crafting user-friendly interfaces and improving
          overall user experience. Currently seeking opportunities to transition into a Full Stack Developer role, where
          I can expand my backend development skills, contribute to end-to-end solutions, and grow within a
          supportive and collaborative team environment.</p>

        <button className="w-[100px] h-[40px] p-2 bg-red-100 rounded-xl hover:bg-red-200 cursor-pointer text-[#344054]">
          Read more
        </button>
      </div>
    </div>
  );
}
