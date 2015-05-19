define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')
    var app = require('app/app')
    var $ = require('jquery')

    var AppController = Marionette.Controller.extend({
        initialize: function() {
            this.app = app
            this.app.session = new Session({}, {
                remote: false
            })
            if (this.app.sesstion.has('token')) {
                $.ajaxSetup({
                    headers: {
                        'Authorization': this.app.session.get('token')
                    }
                })
                this.app.session = app.session
            }
        },
        index: function() {
            if (this.app.session.hasAuth()) { this.index(); }
        }
    })
})
