'use client'
import { useRouter } from "next/navigation";
import React from "react";

export default function MiniProfile() {
  const router = useRouter();

  return (
    <div id="about" className="w-full h-[420px] m-auto bg-blue-500/50 py-4">
      <div className="m-auto max-w-[744px] min-w-[350px] size-full bg-white p-4 rounded-lg shadow-xl flex flex-col gap-3">
        <span className="text-2xl text-[#344054]">About me</span>
        <p className="text-[#344054] h-[244px]"> Software developer with experiences building responsive and dynamic web applications using
          React.js, Next.js, TypeScript, and RESTful APIs. Passionate about crafting user-friendly interfaces and improving
          overall user experience. Currently seeking opportunities to transition into a Full Stack Developer role, where
          I can expand my backend development skills, contribute to end-to-end solutions, and grow within a
          supportive and collaborative team environment.</p>

        <div className="w-full flex justify-end">
          <button
            type="button"
            onClick={() => router.push('/profile')}
            className="w-[100px] h-[40px] p-2 bg-blue-300/50 hover:bg-blue-500/50 rounded-xl cursor-pointer text-[#344054]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
