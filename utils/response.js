module.exports.response = (code, data) => {
    response = {
        'statusCode': code,
        'body': data
    }
    return response
}