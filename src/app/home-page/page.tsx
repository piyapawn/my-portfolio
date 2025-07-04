'use client'
import DemoCarousel from "../component/demo-carousel";
import MiniProfile from "../component/about-me/mini-profile";
import MiniContact from "../component/about-me/mini-contact";
import MenuBar from "../component/menubar";
import React from "react";

export default function Home() {
  return (
    <div>
      <main className="size-full h-screen">
        <MenuBar />
        <DemoCarousel />
        <MiniProfile />
        <MiniContact />
      </main>
    </div>
  );
}
