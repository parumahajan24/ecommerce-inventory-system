import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDB({
  region: process.env.AWS_REGION || 'us-east-1', // Change this to match your AWS region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  }
});

const dynamodb = DynamoDBDocument.from(client);

export { dynamodb };