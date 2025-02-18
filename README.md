# Envir [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]: https://img.shields.io/npm/v/envir.svg?style=flat
[NPMURL]: https://npmjs.org/package/envir "npm"
[BuildStatusIMGURL]: https://github.com/coderaiser/node-envir/actions/workflows/nodejs.yml/badge.svg
[BuildStatusURL]: https://github.com/coderaiser/node-envir/actions/workflows/nodejs.yml
[CoverageURL]: https://coveralls.io/github/coderaiser/node-envir?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/node-envir/badge.svg?branch=master&service=github
[packagejson-vars]: https://docs.npmjs.com/misc/scripts#packagejson-vars
[per-package-config]: https://docs.npmjs.com/misc/config#per-package-config-settings

Get npm [env][packagejson-vars] [variables][per-package-config] from package.json.

## Install

```
npm i envir --save
```

## How to use?

```js
import envir from 'envir';
const {env, cwd} = process;

envir(env.PATH, cwd(), require('./package'));
// returns
({
    npm_package_config_hello: 'world',
    PATH: '/home/coderaiser/envir/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
    npm_package_version: '1.0.0',
    npm_package_name: 'environ',
});
```

## Related

- [redrun](https://github.com/coderaiser/redrun "redrun") - CLI tool to run multiple npm-scripts fast.
- [wisdom](https://github.com/coderaiser/wraptile "wisdom") - Tool for publishing releases to github and npm according to [Semantic Versionin](http://semver.org "Semantic Versioning").

## License

MIT
