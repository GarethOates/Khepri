const merge = require('defaults-deep'),
    config = {
        'globals': {
            'chai': false,
            'describe': false,
            'expect': false,
            'before': false,
            'riot': false,
            'it': false,
            'after': false,
        },

        'rules': {
            'no-unused-expressions': 0
        }
    },

    original = require('./.eslintrc.json'),

    specConfig = merge(config, original);

module.exports = specConfig;
