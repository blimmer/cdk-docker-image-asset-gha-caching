import { Stack } from "aws-cdk-lib";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { Construct } from "constructs";
import { join } from "path";

export class CachedDockerImageStack extends Stack {
  constructor(scope: Construct) {
    super(scope, "CachedDockerImageStack");

    const dockerImage = new DockerImageAsset(this, "DockerImage", {
      directory: join(__dirname, "docker"),
      assetName: "example-docker-image",

      ...(isCi()
        ? {
            cacheTo: {
              type: "gha",
              params: { mode: "max" },
            },
            cacheFrom: [{ type: "gha" }],
            outputs: ["type=docker"], // equivalent to `--load`, which exports the image to the local Docker daemon
          }
        : {}),
    });

    // use the docker image asset however you'd like (e.g., in ECS, Lambda, etc.)
  }
}

function isCi(): boolean {
  // CI=true is set by GitHub Actions, CircleCI, etc.
  return process.env.CI !== undefined;
}
