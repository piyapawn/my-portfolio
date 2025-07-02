'use client'
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function MiniContact() {
  return (
    <div id="about" className="w-full h-[420px] m-auto bg-white py-4">
      <div className="m-auto max-w-[744px] min-w-[350px] size-full bg-blue-500/50 p-2 rounded-lg shadow-xl">
        <span className="text-2xl text-[#344054]">Contact</span>
        <p className="text-[#344054]">
          {/* TODO: add icon */}
          Tel: 0popo
          email: 0popo
          add: 0popo
        </p>

        <button className="w-[150px] h-[40px] p-2 bg-red-100 rounded-xl hover:bg-red-200 cursor-pointer text-[#344054]">
          Quick e-mailing
        </button>
      </div>
    </div>
  );
}
