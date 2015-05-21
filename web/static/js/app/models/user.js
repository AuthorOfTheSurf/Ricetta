define(function (require, exports, module) {
    var Backbone = require('backbone')

    var handle = Backbone.Model.extend({
        defaults: {
            handle: 'Login',
            token: null
        },
        initialize: function() {}
    })

    exports.handle = handle
})
