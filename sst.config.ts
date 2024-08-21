/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "mcwn",
      removal: input?.stage === "main" ? "retain" : "remove",
      home: "aws",
      providers: { "@pulumiverse/vercel": true },
    };
  },
  async run() {
    new sst.aws.Astro("mcwn-astro", {
      domain: {
        name: "sst.diabolical.dev",
        dns: sst.vercel.dns({ domain: "diabolical.dev" }),
      },
    });
  },
});
