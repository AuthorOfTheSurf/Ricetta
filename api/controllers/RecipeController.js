/**
 * RecipeController
 *
 * @description :: Server-side logic for managing Recipes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var uuid = require('uuid').v4


var service = require('../services/RecipeService');
var Recipe = require('../schema/Recipe');


module.exports = {  


  /**
   * `RecipeController.GetRecipe()`
   */
  GetRecipe: function (req, res) {
    service.GetRecipes(function (err, data) {
      if (err) {
        res.status(400);
        return
      }
      // wrap this stuff
      // strip the retrieved objects out of all the boilerplate
      var results = data.results[0].data.map(function (e, index, arr) {
        return e.row[0];
      });

      res.status(200);
      return res.json(results);
    })
  },

  /**
   * `RecipeController.NewRecipe()`
   */
  NewRecipe: function(req, res) {
    Recipe.validateNew({
      uuid: uuid(),
      author: "socash",
      image: "http://ricetta.io/",
      url: "http://test.io",
      title: "Sample Recipe",
      notes: "Just cook it",
      cookTimeMinutes: 10,
      prepTimeMinutes: 5,
      tags: ["tasty", "low sodium"],
      isPrivate: false,
      created: new Date().toISOString(),
      lastModified: new Date().toISOString()
    }, function (err, recipe) {
      if (err) {
        res.status(400);
        return res.json({
          error: err
        });
      }

      service.AddRecipe(recipe, function (err, data) {
        if (err) {
          res.status(400);
          console.log(err);
          return res.json({
            reason: "Error occured."
          });
        }

        var created = data.results[0].data[0].row[0];

        res.status(200);
        return res.json(created);
      })      

    });
  }

};
