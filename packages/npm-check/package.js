Package.describe({
  name: 'mze3enpm-check',
  version: '0.1.2',
  summary: 'Check npm peer-dependencies and auto-installs them.',
  git: 'github.com/AppStrom/meteor-vue/tree/master/packages/npm-check',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'npm-check',
  use: [
    'ecmascript@0.12.7',
  ],
  sources: [
    'lib.js',
    'npm-check.js',
  ],
})

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})
