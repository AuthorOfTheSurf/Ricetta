define(function (require, exports, module) {
    var Backbone = require('backbone')

    var User = Backbone.Model.extend({
        handle: 'Login'
    })

    exports.User = User
})
