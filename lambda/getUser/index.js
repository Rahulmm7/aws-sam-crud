const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient();

exports.handler = async (event) => {
    try {
        const userId = event.pathParameters.id

        const params = {
            TableName: 'userDB',
            Key: {
                id: userId
            }
        };
        const data = await docClinet.get(params).promise();

        const response = {
            statusCode: 200,
            body: JSON.stringify(data)
        };

        return response
    } catch (error) {
        console.log(error);
        return error
    }
}