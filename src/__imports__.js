var fs = require('fs');
var path = require('path');

exports.resolve = function (env, opts) {
  var manifestPath = opts.rawOpts.gcManifest;
  var srcPath = path.join(opts.rawOpts.cwd, 'src');
  var manifest = require(manifestPath);

  var imports = [];

  // Check for a manifest entry to iterate through
  if (manifest.addons && manifest.addons.communityart) {
    var caKeys = manifest.addons.communityart.keys;
    for (var i = 0; i < caKeys.length; i++) {
      var key = caKeys[i];
      var jsKeyPath = path.join(srcPath, 'communityart', key + '.js');

      if (fs.existsSync(jsKeyPath)) {
        imports.push('src.communityart.' + key.replace('/', '.'));
      }
    }
  }
  // Check for a "communityartConfig.js", import by default
  if (fs.existsSync(path.join(srcPath, 'communityartConfig.js'))) {
    imports.push('src.communityartConfig');
  }

  return imports;
};
