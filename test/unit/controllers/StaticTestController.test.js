var assert = require('assert');
var request = require('supertest');

describe('StaticTestController', function() {

    describe('GET /json', function() {

        it('should respond with a 200 response code', function(done) {
            // use the sails global object app or pass in the one from the setup
            request(sails.hooks.http.app)
            .get('/json')
            .expect(200)
            .end(function(err, res) {
                assert(res.body.response === 'Sails implemented!');
                // Wrap-up
                if (err) {
                    return done(err);
                }
                done();
            });
        });

    });
});
