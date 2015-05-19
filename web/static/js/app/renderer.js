define(function (require, exports, module) {
    var Marionette = require('marionette')
    var Handlebars = require('handlebars')

    Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
        return Handlebars.compile(rawTemplate)
    }
})
