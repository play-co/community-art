var fs = require('fs');
var path = require('path');

exports.resolve = function (env, opts) {
  var manifestPath = opts.rawOpts.gcManifest;
  var srcPath = path.join(opts.rawOpts.cwd, 'src');
  var manifest = require(manifestPath);

  if (!manifest.addons || !manifest.addons.communityart) {
    return [];
  }

  var imports = [];
  var caKeys = manifest.addons.communityart.keys;
  for (var i = 0; i < caKeys.length; i++) {
    var key = caKeys[i];
    var jsKeyPath = path.join(srcPath, 'communityart', key + '.js');

    if (fs.existsSync(jsKeyPath)) {
      imports.push('src.communityart.' + key.replace('/', '.'));
    }
  }

  return imports;
};
