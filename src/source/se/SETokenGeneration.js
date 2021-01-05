const response = require('./data/TokenResponse.json');

function getStub() {
    return {
        predicates: [ {
            equals: {
                method: "POST",
                path: "/api/TokenService/getToken"
            }
        }],
        responses: [
            {
                is: {
                    statusCode: 200,
                    headers: {
                        "status": 200,
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(response)
                }
            }
        ]
    }
}

module.exports = { getStub };