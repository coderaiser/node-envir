'use strict';

const {
    run,
    series,
    parallel,
} = require('madrun');

module.exports = {
    'fix:lint': () => run('lint', '--fix'),
    "lint": () => 'putout lib test',
    "test": () => 'tape \'test/**/*.js\'',
    "watch:test": () => run('watcher', 'npm test'),
    "watch:coverage": () => run('watcher', 'nyc npm test'),
    "watch:lint": () => run('watcher', 'redrun lint:eslint*'),
    "watcher": () => 'nodemon -w test -w lib --exec',
    "coverage": () => 'nyc npm test',
    "report": () => 'nyc report --reporter=text-lcov | coveralls'
};

