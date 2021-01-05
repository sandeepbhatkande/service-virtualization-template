const properties = require('./../../data/AppProps.json');
const mbHelper = require('./../../helpers/MountebankHelper');

function addService() {
    const response = { 
        message: "hello world ${TIME}"
    }

    const stubs = [{
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/hello"
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
                    }/* ,
                    behaviors: [{
                        decorate: "config => { var temp = 0; config.response.body = config.response.body.replace('${TIME}', temp++); }"
                    }] */
                }
            ]
    }];

    const imposter = {
        port: properties.service_port,
        protocol: properties.protocol,
        stubs: stubs
    };

    return mbHelper.postImposter(imposter);
}

module.exports = { addService };