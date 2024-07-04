import { pgTable, serial, varchar, text, jsonb } from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  illustrations: jsonb("illustrations"),
  techUsed: varchar("tech_used", { length: 255 }),
  sourceCodeLink: varchar("source_code_link", { length: 255 }),
  liveProjectLink: varchar("live_project_link", { length: 255 }),
  properties: jsonb("properties"),
});
