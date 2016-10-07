'use strict';
module.exports = (config) => {
    config.set({
        basepath: '',
        frameworks: ['mocha', 'chai', 'riot'],
        files: [
            './src/**/*.spec.js'
        ],
        preprocessors: {
            '**/*.tag': ['riot']
        },
        browsers: ['PhantomJS'],
        reporters: ['mocha'],
        failOnEmptyTestSuite: false,
        singleRun: true
    });
};
