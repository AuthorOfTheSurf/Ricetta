var cypher = require('./Cypher').cypher

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