import { defineEventHandler } from "h3";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  handlers: [{
    route: "/**",
    middleware: true,
    handler: "./server/midd/all.ts",
  }],
});
