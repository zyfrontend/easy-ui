import { defineConfig } from "vitepress";
import {componentPreview, containerPreview} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Easy-UI",
  description: "学习",
  base: "/easy-ui/",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],
    search: {provider: "local"},
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "开始使用", link: "/get-started" },
          { text: "组件", link: "/components/button" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zyfrontend/easy-ui" },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
