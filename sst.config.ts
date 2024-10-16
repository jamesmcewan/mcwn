/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "mcwndev",
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
    new sst.aws.StaticSite("mcwndev-astro", {
      build: {
        command: "bun run build",
        output: "dist",
      },

      domain:
        $app.stage === "main"
          ? {
              name: "mcwn.dev",
              aliases: ["mcewan.io", "jamesmcewan.com"],
              redirects: ["mcewan.foo", "mcwn.me", "jmce.me"],
              dns: sst.aws.dns(),
            }
          : undefined,
    });
  },
});
