define(function (require, exports, module) {
    var Marionette = require('marionette')
    var Handlebars = require('handlebars')

    Marionette.templateCache.prototype.compileTemplate = function (rawTemplate) {
        return Handlebars.compile(rawTemplate)
    }
})
