// // const { v4 } = require('uuid');

const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient()

exports.handler = async (event) => {
    const user = JSON.parse(event.body);
    // const token = v4();
    // console.log(token)
    const data = await docClinet.put({
        TableName: 'userDB',
        Item: {
            id: user.id,
            // id: token,
            username: user.username,
            email: user.email,
            password: user.password,
        },
    }).promise()

    response = {
        'statusCode': 200,
        'body': "User Created"
    }
    return response

};