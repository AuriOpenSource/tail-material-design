import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindNested from "tailwindcss/nesting/index.js";
import cssnano from "cssnano";
export default {
  plugins: [
    postcssImport,
    tailwindNested,
    tailwindcss("./src/components/tailwind.config.js"),
    autoprefixer,
    // cssnano({
    //   preset: "default",
    // }),
  ],
};
