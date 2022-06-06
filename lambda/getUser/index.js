const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient();

exports.handler = async (event) => {
    const userId = event.pathParameters.id
    const params = {
        TableName: userDB,
        Key: {
            id: userId
        }
    };
    const results = await docClinet.getItem(params).promise();
    return {
        statusCode: 200,
        headers: {},
        body: JSON.stringify(event)
    };

}