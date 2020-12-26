Package.describe({
  name: 'mze3evue-component-dev-server',
  version: '0.1.4',
  summary: 'Dev server for vue hot-reloading',
  git: 'github.com/AppStrom/meteor-vue',
  documentation: 'README.md',
  debugOnly: true,
})

Package.onUse(function (api) {
  api.use('ecmascript@0.12.7')
  api.use('webapp@1.7.4')
  api.mainModule('server/main.js', 'server')
})
