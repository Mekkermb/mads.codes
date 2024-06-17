import "server-only";
import { sql } from "@vercel/postgres";
import { cache } from "react";

export const DAL = {
  query: {
    getProjects: cache(async () => {
      return await sql`
          SELECT *
          FROM projects`;
    }),
  },
};
