Package.describe({
  name: 'andruschka:json-sql',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Library for mapping mongo-style query objects to SQL queries.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/andruschka/meteor-json-sql.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'json-sql': '0.3.7'
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('json-sql.js', 'server');
  api.export('jsonSql', 'server');
});
