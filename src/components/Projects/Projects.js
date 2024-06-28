import React from "react";
import { DAL } from "@/server/data-access-layer";
import Project from "@/components/Project";

async function Projects() {
  const { rows } = await DAL.query.getProjects();

  return (
    <section className={`
      container
      grid
      grid-cols-1
      justify-items-center
      gap-16
      text-center
      sm:grid-cols-2
    `}
    >
      {rows.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </section>
  );
}

export default Projects;
