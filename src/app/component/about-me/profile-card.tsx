'use client'
import React from "react";
import Image from 'next/image';
import ProfileData from "@/app/data/profile";
import EmailIcon from '@mui/icons-material/Email';
import Face3Icon from '@mui/icons-material/Face3';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function ProfileCard() {
  return (
    <div className="max-w-[744px] min-w-[350px] h-fit m-auto bg-white py-4">
      <div className="m-auto max-w-[744px] min-w-[425px] size-full bg-blue-300/50 p-4 rounded-lg shadow-xl flex gap-3">
        <div className="flex flex-col items-center border-r-2 border-sky-300 pr-2">
          <Image
            src={ProfileData?.imgSrc}
            className="rounded-full"
            width={150}
            height={150}
            alt="My photo"
          />
          <ul>
            <li className="pt-2 text-[#344054] flex items-center"><Face3Icon /> : {ProfileData?.name}</li>
            <li className="pt-2 text-[#344054] flex items-center hover:text-shadow-sm/20 hover:text-shadow-white hover:text-sky-400"><a href={`mailto:${ProfileData?.email}`}><EmailIcon /> : {ProfileData?.email}</a></li>
            <li className="pt-2 text-[#344054] flex items-center hover:text-shadow-sm/20 hover:text-shadow-white hover:text-sky-400"><a href="/file/CV-Piyaporn.pdf" download><FileDownloadIcon /> : Download CVs</a></li>
          </ul>
        </div>
        <p className="text-[#344054] flex-2" dangerouslySetInnerHTML={{ __html: ProfileData?.description }} />
      </div>
    </div>
  );
}
