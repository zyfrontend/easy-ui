import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import EasyUI from "easy-ui";
import { ElementPlusContainer } from "@vitepress-preview/component";

import "@vitepress-preview/component/style.css";
import "easy-ui/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(EasyUI);
  },
};
