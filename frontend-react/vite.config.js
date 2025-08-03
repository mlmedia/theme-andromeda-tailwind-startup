import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig({
        plugins: [
                react(),
                viteStaticCopy({
                        targets: [
                                { src: "src/assets/fonts", dest: "assets" },
                                { src: "src/assets/icons", dest: "assets" },
                                { src: "src/assets/images", dest: "assets" },
                        ],
                }),
        ],
        server: {
                open: true,
        },
        build: {
                rollupOptions: {
                        output: {
                                assetFileNames: (assetInfo) => {
                                        const ext = path
                                                .extname(assetInfo.name || "")
                                                .toLowerCase();
                                        if (ext === ".css") {
                                                return "css/[name]-[hash][extname]";
                                        }
                                        return "assets/[name]-[hash][extname]";
                                },
                                chunkFileNames: "js/[name]-[hash].js",
                                entryFileNames: "js/[name]-[hash].js",
                        },
                },
        },
});
