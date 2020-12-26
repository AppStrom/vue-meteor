Package.describe({
  name: 'mze3evue-pug',
  version: '0.1.3',
  summary: 'Add pug support for vue components',
  git: 'github.com/AppStrom/meteor-vue',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'vue-component-pug',
  use: [
    'ecmascript@0.12.7',
  ],
  sources: [
    'vue-pug.js',
  ],
  npmDependencies: {
    'pug': '2.0.3',
  },
})

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})
