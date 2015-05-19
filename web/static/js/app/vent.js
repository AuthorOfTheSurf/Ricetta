define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')

    var vent = new Backbone.Wreqr.EventAggragator()
    exports.vent = vent
})
