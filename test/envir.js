'use strict';

const test = require('tape');
const envir = require('..');

test('envir: no pathEnv', (t) => {
    t.throws(envir, /pathEnv should be a string!/, 'should throw when no pathEnv');
    t.end();
});

test('envir: no dir ', (t) => {
    const fn = () => envir('');
    
    t.throws(fn, /dir should be a string!/, 'should throw when no dir');
    t.end();
});

test('envir: no info', (t) => {
    const fn = () => envir('', '');
    
    t.throws(fn, /info should be an object!/, 'should throw when no info');
    t.end();
});

test('envir', (t) => {
    const name = 'hello';
    const version = '1.0.0';
    const config = {
        hello: 'world'
    };
    
    const result = envir('/', '/dir', {
        name,
        version,
        config,
    });
    
    const expected = {
        PATH: '/dir/node_modules/.bin:/',
        npm_package_version: version,
        npm_package_name: name,
        npm_package_config_hello: 'world',
    };
    
    t.deepEqual(result, expected, 'should be equal');
    t.end();
});

