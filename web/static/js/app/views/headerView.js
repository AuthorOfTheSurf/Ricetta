define(function (require, exports, module) {
    var Marionette = require('marionette')
    var template = require('hbs!../templates/headerRegion')
    var User = require('app/models/user').User

    var HeaderView = Marionette.ItemView.extend({
        model: User,
        template: template,
        initialize: function(options) {
            this.User = options.User
        }
    })

    exports.HeaderView = HeaderView
})
