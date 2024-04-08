import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CachedDockerImageStack extends Stack {
  constructor(scope: Construct) {
    super(scope, 'CachedDockerImageStack');

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkDockerImageAssetGhaCachingQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
