var r = require("request");
var txUrl = 'http://neo4j:6SPddRTgKSlDLVvquyWmTeEVYbrJp3XHxA00@localhost:7474/db/data/transaction/commit';

function cypher(query, params, cb) {
  r.post({
    uri: txUrl,
    json: {
      statements:[{
        statement:  query,
        parameters: params
      }]
    }
  },
  function (err, res) {
    cb(err, res.body);
  });
}

// no relations yet
function deleteAllNodes(callback, err, app) {
  var query = build([
    'MATCH (n)',
    'DELETE n'
  ]);
  cypher(query, {}, function (err, data) {
    if (err) {
      console.log('Neo4j failed to wipe');
      console.log(err);
      throw err;
    }
    console.log("Err data:" + JSON.stringify(err));
    console.log("Wipe data:" + JSON.stringify(data));
  });
  callback(err, app);
}


function build(arr) {
  return arr.join('\n');
}


module.exports = {
  cypher: cypher,
  deleteAllNodes: deleteAllNodes,
  build: build
};