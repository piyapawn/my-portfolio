'use client'
import ProfileCard from "../component/about-me/profile-card";
import MenuBar from "../component/menubar";
import React from "react";
import WorkTimeline from "../component/about-me/work-timeline";

export default function Profile() {
  return (
    <div>
      <main className="size-full h-screen">
        <MenuBar />
        <ProfileCard />
        <WorkTimeline />
      </main>
    </div>
  );
}
