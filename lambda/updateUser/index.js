const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient();

exports.handler = async (event) => {

    try {
        const item = JSON.parse(event.body)

        const params = {
            TableName: 'userDB',
            Key: {
                id: event.pathParameters.id

            },
            UpdateExpression: 'set username = :u, password = :p',
            ExpressionAttributeValues: {
                ":u": item.username,
                ":p": item.password
            },
            ReturnValues: 'UPDATED_NEW'
        };

        const data = await docClinet.update(params).promise();

        response = {
            'statusCode': 200,
            'body': "user is updated"
        }
        return response

    } catch (error) {
        console.log(error);
        return error
    }
}