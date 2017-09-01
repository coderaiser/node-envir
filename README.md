# Envir [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Get npm env variables from package.json.

## Install

```
npm i envir --save
```

## How to use?

```js
const envir = require('envir');
const {env, cwd} = process;

envir(env.PATH, cwd(), require('./package'));
// returns
{
    npm_package_config_hello: 'world',
    PATH: '/home/coderaiser/envir/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
    npm_package_version: '1.0.0',
    npm_package_name: 'environ'
}
```

## Related

- [redrun](https://github.com/coderaiser/redrun "redrun") - CLI tool to run multiple npm-scripts fast.
- [wisdom](https://github.com/coderaiser/wraptile "wisdom") - Tool for publishing releases to github and npm according to [Semantic Versionin](http://semver.org "Semantic Versioning").

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/envir.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/node-envir/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/node-envir.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/envir "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/node-envir  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/node-envir "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
