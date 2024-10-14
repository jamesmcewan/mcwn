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
              redirects: [
                "mcewan.io",
                "jamesmcewan.com",
                "jamesmcewan.co.uk",
                "jamesmcewan.net",
                "defuser.net",
                "mcewan.foo",
                "diabolical.dev",
                "mcwn.me",
                "jmce.me",
                "mcwn.io",
              ],
              dns: sst.aws.dns(),
            }
          : undefined,
    });
  },
});
