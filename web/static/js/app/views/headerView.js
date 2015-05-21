define(function (require, exports, module) {
    var Marionette = require('marionette')
    var template = require('hbs!../templates/headerRegion')
    // var handle = require('app/models/user').handle

    var headerView = Marionette.ItemView.extend({
        // model: handle,
        template: template,
        initialize: function(options) {
            this.handle = options.handle
        }
    })

    exports.headerView = headerView
})
