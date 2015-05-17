var Sails = require('sails');
var app;

var Cypher = require('../api/services/Cypher');

before(function(done) {
  this.timeout(7000);
  Sails.lift({
    // configuration for testing purposes
  }, function (err, server) {
    app = server;
    
    if (err) { return done(err); }
    
    // here you can load fixtures, etc.
    
    // Database wipe
    // pass done(err, app) in as conclusive call
    Cypher.deleteAllNodes(done, err, app);

  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  Sails.lower(done);
});
