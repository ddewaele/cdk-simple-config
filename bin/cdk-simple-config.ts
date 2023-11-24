#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkSimpleConfigStack } from '../lib/cdk-simple-config-stack';
import { EnvConfig } from '../lib/types';
import config from "config";
import { Runtime } from 'aws-cdk-lib/aws-lambda';


const app = new cdk.App();
new CdkSimpleConfigStack(app, 'CdkSimpleConfigStack', {});

const env = process.env["NODE_ENV"];

// Check if environment variable NODE_ENV is set
if ( env === undefined) {
    console.error("Environment variable NODE_ENV is not set");
    process.exit(1);
}

const envConfig: EnvConfig = config.get('envConfig') as EnvConfig;
console.log("envConfig",envConfig.lambdaCodeBucketArn);
console.log("envConfig",envConfig.soft.key1);

