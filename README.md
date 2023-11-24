# Testing CDK config project

Testing the nodejs [config](https://github.com/node-config/node-config) library for environment specific configs.

When running `NODE_ENV="tst" npx aws-cdk ls` the cdk fails with

```
/Users/davydewaele/Projects/Aws/cdk-simple-config/node_modules/config/lib/config.js:423
      Object.defineProperty(object, propertyName, {
             ^
TypeError: Cannot redefine property: bundlingDockerImage
    at Function.defineProperty (<anonymous>)
    at Config.util.makeImmutable (/Users/davydewaele/Projects/Aws/cdk-simple-config/node_modules/config/lib/config.js:423:14)
    at Config.util.makeImmutable (/Users/davydewaele/Projects/Aws/cdk-simple-config/node_modules/config/lib/config.js:414:32)
    at Config.util.makeImmutable (/Users/davydewaele/Projects/Aws/cdk-simple-config/node_modules/config/lib/config.js:414:32)
    at Config.util.makeImmutable (/Users/davydewaele/Projects/Aws/cdk-simple-config/node_modules/config/lib/config.js:414:32)
    at Config.get (/Users/davydewaele/Projects/Aws/cdk-simple-config/node_modules/config/lib/config.js:170:12)
    at Object.<anonymous> (/Users/davydewaele/Projects/Aws/cdk-simple-config/bin/cdk-simple-config.ts:21:37)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/davydewaele/Projects/Aws/cdk-simple-config/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)

Subprocess exited with error 1
```

