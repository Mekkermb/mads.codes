import React from "react";
import { DAL } from "@/server/data-access-layer";
import Project from "@/components/Project";

async function Projects() {
  const { rows } = await DAL.query.getProjects();

  return (
    <section
      className={`
        container
        col-span-full
        grid
        grid-cols-1
        gap-48

        md:grid-cols-2
        md:gap-16
      `}
    >
      {rows.map((project) => (
        <Project
          key={project.id}
          project={project}
        ></Project>
      ))}
    </section>
  );
}

export default Projects;
