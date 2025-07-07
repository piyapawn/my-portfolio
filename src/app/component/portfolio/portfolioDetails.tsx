'use client'
import React from "react";
import Image from 'next/image';
import { MenuItem, Select } from "@mui/material";
import { ProjectType } from "@/app/model/DataType";
import ProjectInfos from "@/app/data/project-Information";

type Props = {
  projectData: ProjectType,
  setSelectedProject: (projectId: string) => void,
  selectedProject: string,
}

export default function PortfolioDetails({ projectData, setSelectedProject, selectedProject }: Props) {
  return (
    <main className="max-w-[744px] min-w-[350px] h-fit m-auto p-8 bg-[#f0f8ff]">
      <div className="flex justify-between items-center flex-wrap max-md:justify-center">
        <span className="text-[#344054] text-xl">{projectData?.projectName}</span>
        <Select
          labelId="project-select"
          id="project-selector"
          value={selectedProject}
          onChange={(event) => setSelectedProject(event.target.value)}
        >
          {ProjectInfos?.map((projectData: ProjectType) => { return (<MenuItem value={projectData?.id} key={projectData?.id}>{projectData?.projectName}</MenuItem>) })}
        </Select>
      </div>

      {projectData?.vidSrc && (
        <div className="max-w-[744px] min-w-[350px] h-fit m-auto p-8">
          <video width="680" height="200" controls preload="none">
            <source src={projectData?.vidSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {projectData?.imgSrc && (
        <div className="max-w-[744px] min-w-[350px] h-fit m-auto p-8">
          <Image
            src={projectData?.imgSrc}
            width={680}
            height={200}
            alt={projectData?.projectName}
          />
        </div>
      )}

      <p className="text-[#344054]" dangerouslySetInnerHTML={{ __html: projectData?.details }} />
    </main>
  );
}
