Package.describe({
  name: 'mze3evue-coffee',
  version: '0.4.2',
  summary: 'Add coffee support for vue components',
  git: 'github.com/AppStrom/meteor-vue',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'vue-component-coffee',
  use: [
    'ecmascript@0.12.7',
    'coffeescript-compiler@2.3.2_1',
  ],
  sources: ['vue-coffee.js'],
})

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})
