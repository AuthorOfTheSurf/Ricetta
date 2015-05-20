define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')
    var app = require('app/app')
    var $ = require('jquery')

    var HeaderView = require('app/views/headerRegion').HeaderView
    var User = require('app/models/user').User

    var AppController = Marionette.Controller.extend({
        initialize: function() {
            this.app = app
        },

        index: function() {
            this.showNavBar()
        },

        showNavBar: function() {
            this.app.headerRegion.show(new HeaderView({
                user: 'Login'
            }))
        }
    })

    exports.AppController = AppController
})
