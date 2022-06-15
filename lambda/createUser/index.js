const { v4 } = require('uuid');
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient();
const response = require('responseHandler')
exports.handler = async (event) => {
    try {
        const user = JSON.parse(event.body);

        const params = {
            TableName: 'userDB',
            Item: {
                id: v4(),
                username: user.username,
                email: user.email,
                password: user.password,
            },
        }

        const data = await docClinet.put(params).promise();

        response.response(200, { data })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
};