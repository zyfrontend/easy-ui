import { makeInstaller } from "@easy-ui/utils";
import components from "./components";
import "@easy-ui/theme/index.css";
const installer = makeInstaller(components);

export * from "@easy-ui/components";

export default installer;
