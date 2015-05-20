define(function (require, exports, module) {
    var Marionette = require('marionette')
    var template = require('hbs!../templates/headerRegion')

    var HeaderView = Marionette.ItemView.extend({
        template: template,
        ui: {},
        initialize: function(options) {
            this.user = options.user
        }
    })

    exports.HeaderView = HeaderView
})
