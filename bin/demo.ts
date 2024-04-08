#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { CachedDockerImageStack } from "../lib/CachedDockerImageStack";
import { AppStagingSynthesizer } from "@aws-cdk/app-staging-synthesizer-alpha";
import { BucketEncryption } from "aws-cdk-lib/aws-s3";

const app = new App({
  defaultStackSynthesizer: AppStagingSynthesizer.defaultResources({
    appId: "CachedDockerImageDemo",
    stagingBucketEncryption: BucketEncryption.S3_MANAGED,
    imageAssetVersionCount: 10, // Keep 10 latest images
  }),
});

new CachedDockerImageStack(app, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-west-2",
  },
});
