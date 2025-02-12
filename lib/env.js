'use strict';

const path = require('node:path');
const jessy = require('jessy');
const keys = require('all-object-keys');

module.exports.path = (pathEnv, cwdEnv) => {
    return [
        cwdEnv,
        path.sep,
        'node_modules',
        path.sep,
        '.bin',
        path.delimiter,
        pathEnv,
    ].join('');
};

module.exports.config = (config) => {
    const result = {};
    
    if (!config)
        return result;
    
    for (const key of keys('_', config)) {
        const name = `npm_package_config_${key}`;
        
        result[name] = jessy(key, '_', config);
    }
    
    return result;
};
