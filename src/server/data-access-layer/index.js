import "server-only";

import { sql } from "@vercel/postgres";

export const DAL = {
  query: {
    getProjects: async () => {
      return await sql`
          SELECT *
          FROM projects`;
    },
  },
};
