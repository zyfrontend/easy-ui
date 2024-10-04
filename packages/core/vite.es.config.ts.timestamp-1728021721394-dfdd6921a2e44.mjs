// vite.es.config.ts
import { defineConfig } from "file:///Users/zy/Documents/npmjs/easy-ui/node_modules/.pnpm/vite@5.4.8_@types+node@20.16.10_sass@1.79.4/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/zy/Documents/npmjs/easy-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_@types+node@20.16.10_sass@1.79.4__vue@3.5.10_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///Users/zy/Documents/npmjs/easy-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.16.10_rollup@4.24.0_typescript@5.6.2_vite@5.4.8_@types+node@20.16.10_sass@1.79.4_/node_modules/vite-plugin-dts/dist/index.mjs";
import { readdirSync } from "node:fs";
import { filter, map } from "file:///Users/zy/Documents/npmjs/easy-ui/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
var __vite_injected_original_dirname = "/Users/zy/Documents/npmjs/easy-ui/packages/core";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
var vite_es_config_default = defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: "../../tsconfig.build.json",
    outDir: "dist/types"
  })],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "EasyUI",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name;
        },
        // 分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils")) {
            return "utils";
          }
          for (const item of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${item}`)) {
              return item;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvenkvRG9jdW1lbnRzL25wbWpzL2Vhc3ktdWkvcGFja2FnZXMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3p5L0RvY3VtZW50cy9ucG1qcy9lYXN5LXVpL3BhY2thZ2VzL2NvcmUvdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3p5L0RvY3VtZW50cy9ucG1qcy9lYXN5LXVpL3BhY2thZ2VzL2NvcmUvdml0ZS5lcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCB7cmVhZGRpclN5bmN9IGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQge2ZpbHRlciwgbWFwfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5jb25zdCBDT01QX05BTUVTID0gW1xuXHRcIkJ1dHRvblwiXG5dIGFzIGNvbnN0XG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZyk6IHN0cmluZ1tdIHtcblx0Y29uc3QgZW50cmllcyA9IHJlYWRkaXJTeW5jKGJhc2VQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG5cdHJldHVybiBtYXAoXG5cdFx0ZmlsdGVyKGVudHJpZXMsIChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXG5cdFx0KGVudHJ5KSA9PiBlbnRyeS5uYW1lXG5cdClcbn1cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFt2dWUoKSwgZHRzKHtcblx0XHR0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJyxcblx0XHRvdXREaXI6IFwiZGlzdC90eXBlc1wiLFxuXHR9KV0sXG5cdGJ1aWxkOiB7XG5cdFx0b3V0RGlyOiAnZGlzdC9lcycsXG5cdFx0bGliOiB7XG5cdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9pbmRleC50c1wiKSxcblx0XHRcdG5hbWU6IFwiRWFzeVVJXCIsXG5cdFx0XHRmaWxlTmFtZTogXCJpbmRleFwiLFxuXHRcdFx0Zm9ybWF0czogW1wiZXNcIl0sXG5cdFx0fSxcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRleHRlcm5hbDogW1xuXHRcdFx0XHRcInZ1ZVwiLFxuXHRcdFx0XHRcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiLFxuXHRcdFx0XHRcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiLFxuXHRcdFx0XHRcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcblx0XHRcdFx0XCJAcG9wcGVyanMvY29yZVwiLFxuXHRcdFx0XHRcImFzeW5jLXZhbGlkYXRvclwiXG5cdFx0XHRdLFxuXHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG5cdFx0XHRcdFx0aWYoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSByZXR1cm4gXCJpbmRleC5jc3NcIlxuXHRcdFx0XHRcdHJldHVybiBhc3NldEluZm8ubmFtZSBhcyBzdHJpbmdcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gXHU1MjA2XHU1MzA1XG5cdFx0XHRcdG1hbnVhbENodW5rcyhpZCkge1xuXHRcdFx0XHRcdGlmKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ2ZW5kb3JcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpZC5pbmNsdWRlcyhcIi9wYWNrYWdlcy9ob29rc1wiKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwiaG9va3NcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpZC5pbmNsdWRlcyhcIi9wYWNrYWdlcy91dGlsc1wiKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwidXRpbHNcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IoY29uc3QgaXRlbSBvZiBnZXREaXJlY3Rvcmllc1N5bmMoXCIuLi9jb21wb25lbnRzXCIpKSB7XG5cdFx0XHRcdFx0XHRpZihpZC5pbmNsdWRlcyhgL3BhY2thZ2VzL2NvbXBvbmVudHMvJHtpdGVtfWApKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxTQUFTLG9CQUFvQjtBQUNsVyxPQUFPLFNBQVM7QUFDaEIsU0FBUSxlQUFjO0FBQ3RCLE9BQU8sU0FBUztBQUNoQixTQUFRLG1CQUFrQjtBQUMxQixTQUFRLFFBQVEsV0FBVTtBQUwxQixJQUFNLG1DQUFtQztBQVN6QyxTQUFTLG1CQUFtQixVQUE0QjtBQUN2RCxRQUFNLFVBQVUsWUFBWSxVQUFVLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFDN0QsU0FBTztBQUFBLElBQ04sT0FBTyxTQUFTLENBQUMsVUFBVSxNQUFNLFlBQVksQ0FBQztBQUFBLElBQzlDLENBQUMsVUFBVSxNQUFNO0FBQUEsRUFDbEI7QUFDRDtBQUNBLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSTtBQUFBLElBQ3BCLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxFQUNULENBQUMsQ0FBQztBQUFBLEVBQ0YsT0FBTztBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0osT0FBTyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUN0QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNkLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDUCxnQkFBZ0IsQ0FBQyxjQUFjO0FBQzlCLGNBQUcsVUFBVSxTQUFTLFlBQWEsUUFBTztBQUMxQyxpQkFBTyxVQUFVO0FBQUEsUUFDbEI7QUFBQTtBQUFBLFFBRUEsYUFBYSxJQUFJO0FBQ2hCLGNBQUcsR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixtQkFBTztBQUFBLFVBQ1I7QUFDQSxjQUFHLEdBQUcsU0FBUyxpQkFBaUIsR0FBRztBQUNsQyxtQkFBTztBQUFBLFVBQ1I7QUFDQSxjQUFHLEdBQUcsU0FBUyxpQkFBaUIsR0FBRztBQUNsQyxtQkFBTztBQUFBLFVBQ1I7QUFDQSxxQkFBVSxRQUFRLG1CQUFtQixlQUFlLEdBQUc7QUFDdEQsZ0JBQUcsR0FBRyxTQUFTLHdCQUF3QixJQUFJLEVBQUUsR0FBRztBQUMvQyxxQkFBTztBQUFBLFlBQ1I7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
