Package.describe({
  summary: "enable the application cache in the browser - Runtime bundles added"
});

Package.on_use(function (api) {
  api.use('webapp', 'server');
  api.use('reload', 'client');
  api.use('routepolicy', 'server');
  api.use('underscore', 'server');
  api.use('http-methods', 'server');
  api.add_files('appcache-client.js', 'client');
  api.add_files('appcache-server.js', 'server');
});
