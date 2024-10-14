/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "mcwn",
      removal: input?.stage === "main" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-2",
        },
      },
    };
  },

  async run() {
    new sst.aws.StaticSite("zom-astro", {
      build: {
        command: "bun run build",
        output: "dist",
      },
    });
  },
});
