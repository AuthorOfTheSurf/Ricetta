define(function (require, exports, module) {
    var marionette = require('marionette')
    var handlebars = require('handlebars')

    marionette.templateCache.prototype.compileTemplate = function (rawTemplate) {
        return handlebars.compile(rawTemplate)
    }
})
