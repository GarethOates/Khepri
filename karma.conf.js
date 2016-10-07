'use strict';
module.exports = (config) => {
    config.set({
        basepath: '',
        frameworks: ['mocha', 'chai', 'riot'],
        plugins: [
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-chai',
            'karma-riot'
        ],
        files: [
            'src/**/*.tag',
            'src/**/*.spec.js'
        ],
        preprocessors: {
            '**/*.tag': ['riot']
        },
        browsers: ['phantomjs'],
        reporters: ['mocha'],
        failOnEmptyTestSuite: false,
        singleRun: true
    });
};
