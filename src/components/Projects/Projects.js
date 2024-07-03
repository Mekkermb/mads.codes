import React from "react";
import Project from "@/components/Project";
import { getProjects } from "@/db/queries";

async function Projects() {
  const projects = await getProjects();

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
      {projects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </section>
  );
}

export default Projects;
