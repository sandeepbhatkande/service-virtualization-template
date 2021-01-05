const properties = require('./data/AppProps.json');
const StubHelper = require('./helpers/StubHelper');
const mb = require('mountebank');

const mbServerInstance = mb.create({
    port: properties.port,
    pidfile: './mb.pid',
    logfile: './mb.log',
    protofile: './protofile.json',
    ipWhitelist: ['*'],
    //allowInjection: true,
    allowCORs: true
});

mbServerInstance.then( StubHelper.getAllStubs() );