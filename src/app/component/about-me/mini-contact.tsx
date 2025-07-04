'use client'
import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function MiniContact() {
  return (
    <div id="about" className="w-full h-[220px] m-auto bg-white py-4">
      <div className="m-auto max-w-[744px] min-w-[350px] size-full bg-blue-300/50 p-4 rounded-lg shadow-xl">
        <span className="text-2xl text-[#344054]">Contact</span>
        <ul>
          <li className="pt-2 text-[#344054] flex items-center"><EmailIcon /> : opal.piyapawn@gmail.com</li>
          <li className="pt-2 text-[#344054] flex items-center"><LinkedInIcon /> :<a href="www.linkedin.com/in/piyapawn-s-b19bb6367">My Linked in</a></li>
          <li className="pt-2 text-[#344054] flex items-center hover:text-shadow-sm/20 hover:text-shadow-white hover:text-sky-400"><a href="/file/CV-Piyaporn.pdf" download><FileDownloadIcon /> : Download CVs</a></li>
        </ul>
      </div>
    </div>
  );
}
