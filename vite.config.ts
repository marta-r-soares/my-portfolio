import-{-defineConfig-}-from-"vite";
import-react-from-"@vitejs/plugin-react";
import-svgr-from-"vite-plugin-svgr";

export-default-defineConfig({
--base:-"/my-portfolio-main/",
--plugins:-[svgr(),-react()],
});