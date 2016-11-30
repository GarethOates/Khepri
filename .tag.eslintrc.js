const merge = require('defaults-deep'),
    config = {
        'rules': {
            'consistent-this': [1, 'tag'],
            'strict': [1, 'global'],
            'no-debugger': 1
        }
    },

    original = require('./.eslintrc.json'),

    tagConfig = merge(config, original);

module.exports = tagConfig;
