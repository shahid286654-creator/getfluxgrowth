import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { sanityDataset, sanityProjectId } from "./src/sanity/env";

export default defineConfig({
  name: "default",
  title: "GetFluxGrowth",
  basePath: "/studio",

  projectId: sanityProjectId,
  dataset: sanityDataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
