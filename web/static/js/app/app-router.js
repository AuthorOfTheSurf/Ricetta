define(function (require, exports, module) {
    var Marionette = require('marionette')
    var AppController = require('app/app-controller').AppController

    var AppRouter = Marionette.AppRouter.extend({
        controller: new AppController(),
        appRoutes: {
            '': 'index'
        }
    })

    exports.AppRouter = AppRouter
})
