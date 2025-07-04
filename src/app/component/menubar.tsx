'use client'
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { MenuType } from "../model/DataType";
import { Button } from "@mui/material";
import MenuItems from "@/app/data/menu";
import { usePathname, useRouter } from "next/navigation";

export default function MenuBar() {
  const router = useRouter();
  const pathname = usePathname();

  function renderMenu(selectedMenu: MenuType) {
    return (
      <Button
        id="home-button"
        key={selectedMenu?.menuCode}
        className={`w-1/5 !min-w-[120px] text-nowrap px-8 h-full ${pathname == selectedMenu?.path && '!bg-blue-300/50'}`}
        onClick={() => router.push(selectedMenu?.path)}
      >
        {selectedMenu?.menuName}
      </Button>
    )
  }
  return (
    <nav className="max-w-[50vw] min-h-[5vh] min-w-[350px] bg-white m-auto sticky top-2 z-10 rounded-full shadow-md ring ring-blue-500/50 flex items-center justify-center gap-2 flex-wrap">
      {MenuItems?.map((menu: MenuType) => renderMenu(menu))}
    </nav>
  );
}
