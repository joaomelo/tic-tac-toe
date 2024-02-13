import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const pathTo = path => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig(() => {
  return {
    build: {
      assetsDir: ".",
      emptyOutDir: true,
      outDir: "../dist",
      sourcemap: true,
    },
    envDir: "../",
    plugins: [vue()],
    publicDir: "../assets",
    resolve: {
      alias: {
        "@body": pathTo("./body"),
        "@main": pathTo("./main"),
        "@shared": pathTo("./shared"),
        "@view": pathTo("./view"),
      },
    },
    root: "./main",
    server: {
      port: 8081,
      strictPort: true,
    },
    test: {
      include: ["../**/*.test.js"],
    },
  };
});
