#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CachedDockerImageStack } from '../lib/CachedDockerImageStack';

const app = new cdk.App();
new CachedDockerImageStack(app);
