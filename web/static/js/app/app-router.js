define(function (require, exports, module) {
    var Marionette = reqiure('marionette')
    var AppController = require('app/app-controller').AppController

    var AppRouter = Marionette.AppRouter.extend({
        controller: new AppController(),
        appRoutes: {
            '': 'index',
            // 'Home': 'showHomeLayout',
            // 'Curator': 'showCurator'
        }
    })

    exports.AppRouter = AppRouter
})
