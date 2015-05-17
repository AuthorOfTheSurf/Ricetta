var request = require('supertest');
var should = require('should');
var db = require('../../../api/services/RecipeService');

describe('Recipe API CRUD operations', function() {
  
  describe('GET /recipes', function() {

    it('should respond with a list of public recipies', function(done) {
      // No recipes initially
      request(sails.hooks.http.app)
        .get('/recipes')
        .expect(200)
        .end(function (err, res) {
          if (err) { return done(err) };

          should.ok(res.body);

          res.body.length.should.equal(0);

          done();
        });
    });

  });

});
