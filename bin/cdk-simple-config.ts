#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSimpleConfigStack } from '../lib/cdk-simple-config-stack';

const app = new cdk.App();
new CdkSimpleConfigStack(app, 'CdkSimpleConfigStack');
