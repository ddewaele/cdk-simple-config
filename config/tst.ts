import { Runtime } from "aws-cdk-lib/aws-lambda";
import { EnvConfig } from "../lib/types";
import { Schedule } from "aws-cdk-lib/aws-events";

const envConfig: EnvConfig = {
    lambdaCodeBucketArn: "arn:aws:s3:::lambdaCodeBucket-test",
    runtime: Runtime.NODEJS_16_X,
    soft: {
        key1: Runtime.NODEJS_18_X,
    }
}
  
export default { envConfig: envConfig};
  
  