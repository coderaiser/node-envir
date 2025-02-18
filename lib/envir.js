import env from './env.js';

const isString = (a) => typeof a === 'string';
const {assign} = Object;

export default (pathEnv, dir, info) => {
    check(pathEnv, dir, info);
    
    const {config} = info;
    const PATH = env.path(pathEnv, dir);
    
    const envVars = assign(env.config(config), {
        PATH,
        npm_package_version: info.version,
        npm_package_name: info.name,
    });
    
    return envVars;
};

function check(pathEnv, dir, info) {
    if (!isString(pathEnv))
        throw Error('pathEnv should be a string!');
    
    if (!isString(dir))
        throw Error('dir should be a string!');
    
    if (typeof info !== 'object')
        throw Error('info should be an object!');
}
