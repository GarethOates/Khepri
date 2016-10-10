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
        browsers: ['Chrome'],
        reporters: ['mocha'],
        failOnEmptyTestSuite: false,
        singleRun: true
    });
};
