const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
 css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/typography.scss";
          @import "@/styles/spacing.scss";
          @import "@/styles/variables.scss";
          @import "@/styles/layout.scss";
        `,
      },
    },
  },
});
