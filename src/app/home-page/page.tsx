'use client'
import { Button } from "@mui/material";
import React from "react";

import { MenuType } from "../model/DataType";
import { useRouter } from "next/navigation";
import MenuItems from "@/app/data/menu";
import DemoCarousel from "../component/demo-carousel";
import MiniProfile from "../component/mini-profile";
import MiniContact from "../component/mini-contact";

export default function Home() {
  const router = useRouter();

  function renderMenu(selectedMenu: MenuType) {
    return (
      <Button
        id="home-button"
        key={selectedMenu.menuCode}
        className="w-1/5 !min-w-[120px] text-nowrap px-8 h-full"
        onClick={() => router.push(selectedMenu.path)}
      >
        {selectedMenu?.menuName}
      </Button>
    )
  }

  return (
    <div>
      <main className="size-full h-screen">
        <nav className="max-w-[50vw] min-h-[5vh] min-w-[350px] bg-white m-auto sticky top-2 z-10 rounded-full shadow-md ring ring-blue-500/50 flex items-center justify-center gap-2 flex-wrap">
          {MenuItems?.map((menu: MenuType) => renderMenu(menu))}
        </nav>
        <DemoCarousel />
        <MiniProfile />
        <MiniContact />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        popo copy right
      </footer> */}
    </div>
  );
}
