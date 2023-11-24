import { Runtime } from "aws-cdk-lib/aws-lambda";

export interface EnvConfig {
    lambdaCodeBucketArn: string,
    runtime: Runtime
    soft: {
        key1: Runtime,
        key2?: Runtime,
    }
}
  