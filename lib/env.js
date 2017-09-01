'use strict';

const path = require('path');
const jessy = require('jessy/legacy');
const keys = require('all-object-keys/legacy');

module.exports.path = (pathEnv, cwdEnv) => {
    return [
        cwdEnv,
        path.sep,
        'node_modules',
        path.sep,
        '.bin',
        path.delimiter,
        pathEnv
    ].join('');
};

module.exports.config = (config) => {
    const result = {};
    
    if (!config)
        return result;
    
    keys('_', config).forEach((key) => {
        const name = `npm_package_config_${key}`;
        const value = jessy(key, '_', config);
        
        result[name] = value;
    });
    
    return result;
};

