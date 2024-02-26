import plugin from "tailwindcss/plugin";
import components from "../dist/components";

/** @type {import('tailwindcss/types/config').PluginCreator} */
const tmd3Creator = ({ config, addComponents }) => {
  let log = false;
  if (config("tmd3.log") !== false) {
    log = true;
  }
  if (log) {
    console.group();
    console.log("Material Design");
    console.groupEnd();
  }

  addComponents(components);
};

export default plugin(tmd3Creator);
