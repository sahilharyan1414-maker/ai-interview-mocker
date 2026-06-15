import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./utils/schema.js",
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_2voz7ZWFBrMk@ep-calm-resonance-ahtr8swy-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    },
});
