import util.ajax as ajax;

import ui.resource.loader as loader;
var resourceMap = loader.getMap();

/** return the width of an image asset */
var getImageWidth = function(url) {
    var map = resourceMap[url];
    var width = 0;
    if (map) {
        width = map.w + map.marginLeft + map.marginRight;
    }
    return width;
};

/** return the height of an image asset */
var getImageHeight = function(url) {
    var map = resourceMap[url];
    var height = 0;
    if (map) {
        height = map.h + map.marginTop + map.marginBottom;
    }
    return height;
};

var _caConfig = null;
var _caManifest = null;
var _jsCache = null;
var _resources = null;

var _init = function() {
  // Load the communityartManifest.json
  var caManifestPath = 'resources/communityart/communityartManifest.json';

  _jsCache = {};
  _resources = {};
  console.log('==== ==== CommunityArt ==== ====');

  _loadDefaults();
  _loadFromManifest();
  _loadFromConfig();
};

var _loadDefaults = function() {
  jsio('import communityart.defaultConfig');
};

var _loadFromManifest = function() {
  if (!CONFIG.modules || !CONFIG.modules.communityart) {
    console.log('CommunityArt: No communityart in CONFIG.modules ... is it in your manifest?');
    return;
  }

  _caConfig = CONFIG.modules.communityart;
  _caManifest = JSON.parse(CACHE[caManifestPath]);
  var missingKeys = [];

  // Try to import all of the requested keys
  for (var key in _caManifest) {
    console.log('CommunityArt: trying to load:', key);
    var keyData = _caManifest[key];

    // Is this key valid?
    if (!keyData) {
      console.warn('> Skipping key, keyData missing');
    } else if (!keyData.url) {
      console.warn('> Skipping key, keyData not valid');
    } else {
      // Try to import it and add the imported results to the _resources
      if (keyData.ext === '.js') {
        try {
          _resources[key] = jsio('import src.communityart.' + key.replace('/', '.'));
          // var srcLocation = 'resources/communityart/' + key + '.js';
          // _resources[key] = eval(CACHE[srcLocation])[0];
          continue;
        } catch (e) {
          console.error('> Could not import config object', e);
          missingKeys.push(key);
        }
      } else {
        var resObj = {
              artType: 'ImageView',
              url: key + keyData.ext,
              opts: {}
            };
        _resources[key] = resObj;

        // Add the proper path to the key urls
        if (resObj.url.indexOf('http') !== 0) {
          resObj.url = 'resources/communityart/' + _resources[key].url;

          // Default sizes
          resObj.w = resObj.w || getImageWidth(resObj.url);
          resObj.h = resObj.h || getImageHeight(resObj.url);
        }
      }
    }
  }

  if (missingKeys.length) {
    resolveKeys(missingKeys);
  }
};

var _loadFromConfig = function() {
  try {
    var s = 'import src.communityartConfig';
    jsio(s);
  } catch (e) {
    console.log('CommunityArt: no default config could be imported');
  }
};

/** Takes an array of keys, tries to figure out what they should be and adds
    them to _resources */
var resolveKeys = function(array, cb) {
  console.log('Resolving keys:', array);
  for (var i = array.length - 1; i >= 0; i--) {
    // check if key is in local _resources
    var key = array[i];
    if (_resources[key]) {
      console.log('> Found key in _resources');
      array.splice(i, 1);
    }
  }

  // batch request to nimbus to resolve the missing keys
  var nimbusUrl = _caConfig.server || 'http://js.io/';
  var configRequestCount = 0;
  var completeConfigRequests = 0;
  ajax.post({
      url: nimbusUrl + 'api/v1/art/resolve/',
      data: {
        userID: _caConfig.userID,
        keys: array
      }
    }, function(error, res, headers) {
      if (error) {
        console.error('error in nimbus communityart resolve request ajax:', error);
        return;
      }

      // add the result of batch request to the manifest
      for (var key in res.keyMap) {
        var keyResult = res.keyMap[key];
        if (keyResult.error) {
          console.error('error in resolution:', key, keyResult);
          continue;
        }
        _caManifest[key] = keyResult;

        // We also need to request and load the configuration
        configRequestCount++;
        var artUrl = keyResult.url;
        var jsUrl = artUrl.substring(0, artUrl.lastIndexOf('.')) + '.js';
        ajax.get({
            url: jsUrl
          },
          function(error, res, headers) {
            if (error) {
              console.error('error in art config ajax request:', error);
              return;
            }

            _jsCache[key] = res;
            try {
              _resources[key] = eval(res);
            } catch (e) {
              console.error('CommunityArt: Error during runtime eval:', key, e);
            }

            completeConfigRequests++;
            if (completeConfigRequests >= configRequestCount) {
              console.log('CommunityArt: Loading complete!');
              // debugger
              cb && cb();
            }
          });
      }
    });
};

var getTypeFromResource = function(type, resource) {
  if (Array.isArray(resource)) {
    for (var i = 0; i < resource.length; ++i) {
      var res = getTypeFromResource(type, resource[i]);
      if (res) {
        return res;
      }
    }
    return null;
  }

  // Verify the resource type matches
  if (resource.type === type) {
    return resource;
  }
  return null;
};

// TODO some sort of preloading for remote images?

exports = {};
exports.IMAGE_PREFIX = 'modules/community-art/images_ca/';

// To avoid circular imports... we still want to run initilization, but we want the
// existing exports to be available.
GC.communityart = exports;
_init();
