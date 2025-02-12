'use strict';

const {run} = require('madrun');

module.exports = {
    'fix:lint': () => run('lint', '--fix'),
    'lint': () => 'putout .',
    'test': () => `tape 'test/**/*.js'`,
    'watch:test': () => run('watcher', 'npm test'),
    'watch:coverage': () => run('watcher', 'nyc npm test'),
    'watch:lint': () => run('watcher', 'redrun lint:eslint*'),
    'watcher': () => 'nodemon -w test -w lib --exec',
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=text-lcov | coveralls',
};
