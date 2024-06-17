import React from "react";
import { DAL } from "@/server/data-access-layer";
import Project from "@/components/Project";

async function Projects() {
  const { rows } = await DAL.query.getProjects();

  return (
    <section className="relative col-span-full">
      {rows.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </section>
  );
}

export default Projects;
