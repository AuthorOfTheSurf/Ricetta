require.config({
    baseUrl: 'static/js',

    paths: {
        // looks like this one has wreqr and babysitter integration. Sweet.
        'marionette': 'vendor/bower_components/marionette/lib/backbone.marionette'
    },

    packages: [
        {
            location: 'app',
            name: 'app'
        },
        {
            location: 'vendor/bower_components/jquery/dist',
            name: 'jquery',
            main: 'jquery'
        },
        {
            location: 'vendor/bower_components/backbone',
            name: 'backbone',
            main: 'backbone'
        },
        {
            location: 'vendor/bower_components/hbs',
            name: 'hbs',
            main: 'hbs'
        }
    ],

    map: {
        '*': {
            'underscore': 'vendor/bower_components/lodash/lodash',
            // hbs has a very outdated Node version of handlebars
            // use the actual handlebars instead.
            'handlebars': 'vendor/bower_components/underscore/underscore'
        }
    },

    hbs: {
        templateExtension: 'html',
        disableI18n: true,
        helperDirectory: 'app/shared/hbs'
    },

    shim: {
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'marionette': {
            'deps': ['jquery', 'underscore', 'backbone'],
            'exports': 'Marionette'
        }
    },

    wrapShim: true,
})
