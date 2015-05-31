Package.describe({
  name: 'tsega:bootstrap3-floating-labels',
  version: '3.1.0_1',
  // Brief, one-line summary of the package.
  summary: 'Adds floating labels to from elements when using bootstrap3.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tsega/bootstrap3-floating-labels',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('jquery', 'client');
  api.use('twbs:bootstrap@3.3.4');
  
  api.add_files([
      'lib/css/bootstrap3-floating-labels.css',
      'lib/js/bootstrap3-floating-labels.js',
    ], 'client');
});