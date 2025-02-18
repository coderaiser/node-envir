import path from 'node:path';
import jessy from 'jessy';
import keys from 'all-object-keys';

const env = {};

env.path = (pathEnv, cwdEnv) => {
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

env.config = (config) => {
    const result = {};
    
    if (!config)
        return result;
    
    for (const key of keys('_', config)) {
        const name = `npm_package_config_${key}`;
        
        result[name] = jessy(key, '_', config);
    }
    
    return result;
};

export default env;
