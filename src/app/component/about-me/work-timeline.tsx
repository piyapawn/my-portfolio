'use client'
import React from "react";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import { WorkType } from "@/app/model/DataType";
import ProfileData from "@/app/data/profile";

export default function WorkTimeline() {
  function renderWorkBox(workExp: WorkType) {
    return (
      <div className="max-w-[744px] min-w-[350px] h-fit bg-blue-300/50 p-4 rounded-lg" key={workExp.company}>
        <div>
          <p className="text-[#344054]"><span className="mr-2">{workExp?.isCurrentJob ? (<WorkIcon />) : (<WorkHistoryIcon />)}</span> {workExp?.company}</p>
          <p className="text-[#344054]"><span className="font-semibold">Role: </span>{workExp?.role}</p>
          <p className="text-[#344054]"><span className="font-semibold">Period: </span>{workExp?.period}</p>
          <p className="text-[#344054]"><span className="font-semibold">Tech: </span> {workExp?.stack}</p>
          <p className="text-[#344054]" dangerouslySetInnerHTML={{ __html: workExp?.project }} />
        </div>
      </div>
    );
  }

  return (
    <div className="size-fit m-auto bg-white py-4 flex flex-col gap-2">
      {ProfileData.workExp.map((work: WorkType) => renderWorkBox(work))}
    </div>
  );
}
