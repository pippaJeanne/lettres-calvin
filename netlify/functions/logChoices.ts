import { getStore, connectLambda } from '@netlify/blobs';
import type { Handler } from "@netlify/functions"


export const handler:Handler = async (event, context) => {
  // 1. Manually bridge the Lambda environment
  connectLambda(event); 
  console.log('node: ', process.version,
      'aws:', process.env.AWS_EXECUTION_ENV ?? "no aws exec env",
      'lambda:', process.env.LAMBDA_TASK_ROOT ?? "no lambda root",
      'blobs:', process.env.NETLIFY_BLOBS_CONTEXT ?? "no blobs context")

  const data = JSON.parse(event.body || "{}");
  const store = getStore("pdf-choices");

  const key = `${Date.now()}-${crypto.randomUUID()}`;
  await store.set(key, JSON.stringify(data));
 console.log(key, data)
  return {
    statusCode:200,
    body: 'ok',
  };
}