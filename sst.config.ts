// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "serena",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: "hobby-dev",
          region: "us-east-2"
        }
      }
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("Workouts", {
      access: "public"
    });

    const site = new sst.aws.Nextjs("Serena", {
      path: ".",
      link: [bucket],
    });

    return {
      siteUrl: site.url,
    };
  },
});
