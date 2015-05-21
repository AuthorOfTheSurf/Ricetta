define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')
    var app = require('app/app')
    var $ = require('jquery')

    var handle = require('app/models/user').handle
    var headerView = require('app/views/headerView').headerView

    var AppController = Marionette.Controller.extend({
        initialize: function() {
            this.app = app
            this.app.headerRegion.show(new headerView())
        },

        index: function() {
        }
    })

    exports.AppController = AppController
})
