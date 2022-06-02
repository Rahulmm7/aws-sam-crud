const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient()

exports.handler = async (event, context) => {
    if (event.httpMethod === "GET") {
        const data = await docClinet.scan({
            TableName: 'userDB',
        }).promise()

        const response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: data
            })
        }
        return response

    }


}