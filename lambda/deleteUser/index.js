
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient()

exports.handler = async (event) => {
    try {
        const params = {
            TableName: 'userDB',
            Key: {
                id: event.pathParameters.id
            }
        }

        const data = await docClinet.delete(params).promise()
        response = {
            'statusCode': 200,
            'body': 'User Deleted'
        }
        return response

    } catch (error) {
        console.log(error)
        return error
    }
}