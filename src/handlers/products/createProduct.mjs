import { v4 as uuidv4 } from 'uuid';
import { dynamodb } from '../../utils/dynamodb.mjs';
import { successResponse, errorResponse } from '../../utils/apiResponse.mjs';

//const dynamodb = DynamoDBDocument.from(new DynamoDB({}));

export async function handler(event) {
    try{

        console.log("Received event: ", event);
        console.log("using dynamodb tbale: ", process.env.PRODUCTS_TABLE);

        const { name, price, description } = JSON.parse(event.body);
        const productId = uuidv4();

        const product = {
            productId,
            name,
            price,
            description,
            createdAt: new Date().toISOString()
        };
        console.log("Saving product:", product);

        await dynamodb.put({
            TableName: process.env.PRODUCTS_TABLE,
            Item: product
        });

        return successResponse (product,201);
    }catch (error){
        console.log('Error in createProduts handler 1', error);
        return errorResponse(error);
    }
};

