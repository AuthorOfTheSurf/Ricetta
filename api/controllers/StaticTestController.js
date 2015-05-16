/**
 * StaticTestController
 *
 * @description :: Server-side logic for managing Statictests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



  /**
   * `StaticTestController.json()`
   */
  json: function (req, res) {
    return res.json({
      response: 'Sails implemented!'
    });
  },


  /**
   * `StaticTestController.plaintext()`
   */
  plaintext: function (req, res) {
    return res.json({
      todo: 'plaintext() is not implemented yet!'
    });
  }
};

