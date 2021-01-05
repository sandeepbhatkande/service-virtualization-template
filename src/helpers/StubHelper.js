const properties = require('./../data/AppProps.json');
const mbHelper = require('./../helpers/MountebankHelper');
const SETokenGeneration = require('./../source/se/SETokenGeneration');

function getAllStubs() {
   let stubs = [];

   if ( properties.source === 'se' ) {
      stubs = [ SETokenGeneration.getStub() ];
   } else if ( properties.source === 'sk' ) {
      stubs = [];
   } else if ( properties.source === 'ease' ) {
      stubs = [];
   }

   const imposter = {
      port: properties.service_port,
      protocol: properties.protocol,
      stubs: stubs
   };

   mbHelper.postImposter(imposter);
}

module.exports = { getAllStubs };