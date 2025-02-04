Package.describe({
  name: 'mze3e:vue-less',
  version: '0.2.1',
  summary: 'Add less support for vue components',
  git: 'github.com/AppStrom/meteor-vue',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'vue-component-less',
  use: [
    'ecmascript@0.12.7',
  ],
  sources: [
    'vue-less.js',
  ],
  npmDependencies: {
    'less': '3.9.0',
  },
})

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})
