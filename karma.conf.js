'use strict';
module.exports = (config) => {
    config.set({
        basepath: '',
        frameworks: [
            'mocha',
            'chai',
            'riot'
        ],
        files: [
            './src/**/tests/tests.js'
        ],
        preprocessors: {
            './src/**/*.tag': ['riot'],
            './src/**/tests/tests.js': ['webpack'],
            './src/**/*.js': ['babel']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            }
        },
        browsers: ['Chrome'],
        reporters: ['mocha'],
        failOnEmptyTestSuite: false,
        singleRun: true
    });
};
