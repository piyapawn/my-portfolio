'use client'
import React, { useState } from "react";
import MenuBar from "../component/menubar";
import { ProjectType } from "../model/DataType";
import PortfolioDetails from "../component/portfolio/portfolioDetails";
import ProjectInfos from "../data/project-Information";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string>("DISCOUNT");
  // finding matching selected project id, incase not found showing the first one
  const selectData: ProjectType = ProjectInfos?.find((eachProject: ProjectType) => eachProject?.id == selectedProject) ?? ProjectInfos[0];

  return (
    <div>
      <main className="size-full h-screen">
        <MenuBar />
        <PortfolioDetails projectData={selectData} setSelectedProject={setSelectedProject} selectedProject={selectedProject} />
      </main>
    </div>
  );
}
