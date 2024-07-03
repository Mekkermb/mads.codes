import { cache } from "react";

import { db } from "@/db";
import { projectsTable } from "./schema";

export const getProjects = cache(async () => {
  const projects = await db.select().from(projectsTable);
  return projects;
});
