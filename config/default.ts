import { Runtime } from "aws-cdk-lib/aws-lambda";
import { EnvConfig } from "../lib/types";

const envConfig: EnvConfig = {
    lambdaCodeBucketArn: "arn:aws:s3:::lambdaCodeBucket",
    runtime: Runtime.NODEJS_18_X,
    soft: {
        key1: Runtime.NODEJS_16_X,
        key2: Runtime.NODEJS_18_X,
    }
}
  
export default { envConfig: envConfig};
  
  