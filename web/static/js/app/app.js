define(function (require, exports, module) {
    var Marionette = require('marionette')

    var Ricetta = new Marionette.Application.extend({
        initialize: function (options) {}
    })

    var app = new Ricetta()

    app.addRegions({
        mainRegion: '#mainRegion',
        headerRegion: '#headerRegion',
        footerRegion: '#footerRegion'
    })

    app.addInitializer(function() {
        Backbone.history.start({
            pushState: false
        })
        $.ajaxSetup({
            statusCode: {
                401: function() {
                    window.location.reload()
                }
            }
        })
    })

    return app
})
