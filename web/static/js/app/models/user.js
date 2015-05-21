define(function (require, exports, module) {
    var Backbone = require('backbone')

    var User = Backbone.Model.extend({
        defaults: {
            Handle: 'Login'
        }
    })

    exports.User = User
})
