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
    cb(err, res.body)
  });
}

// refactor out
function build(arr) {
  return arr.join('\n');
}

var services = {

  GetRecipes: function(callback) {
    var query = build([
      'MATCH (r:Recipe)',
      'RETURN r'
    ]);
    params = {
      limit: 10
    };
    cypher(query, params, callback);
  },

  AddRecipe: function(recipe, callback) {
    var query = build([
      'CREATE (r:Recipe)',
      'SET r += {recipe}',
      'RETURN r'
    ]);
    params = {
      recipe: recipe
    };
    cypher(query, params, callback);
  }

}

module.exports = services;