define(function (require, exports, module) {
    var Marionette = require('marionette')
    var renderer = require('app/renderer')
    var app = require('app/app')
    var AppRouter = require('app/app-router').AppRouter

    app.AppRouter = new AppRouter()

    app.on('start', function() {
        console.log('Ricetta is a go!')
    })

    $(document).ready(function() {
        app.start()
    })
})
