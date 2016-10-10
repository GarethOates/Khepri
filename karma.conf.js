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
            './dist/scripts/app.js',
            './src/**/*.spec.js'
        ],
        preprocessors: {
            './src/**/*.tag': ['riot'],
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
