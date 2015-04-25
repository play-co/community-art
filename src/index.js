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

  if (!CONFIG.modules.communityart) {
    console.error('No communityart in CONFIG.modules ... is it in your manifest?');
    return;
  }

  _jsCache = {};
  _caConfig = CONFIG.modules.communityart;
  _caManifest = JSON.parse(CACHE[caManifestPath]);
  console.log('==== ==== CommunityArt ==== ====');

  _resources = {};
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
              debugger
              cb && cb();
            }
          });
      }
    });
};


// TODO some sort of preloading for remote images?


_init();
/**
  * @class communityart
  * @arg {string} key
  * @returns {Object} artData
  */
exports = function(key) {
  var resObj;
  if (key in _resources) {
    resObj = _resources[key];
  } else {
    // TODO Look in the local project resources to see if it is there
    resObj = {
      artType: 'ImageView',
      opts: {
        url: key + '.png'
      }
    };
  }

  // resObj can be an array, in this function we want the default (first)
  if (Array.isArray(resObj)) {
    resObj = resObj[0];
  }

  // TODO implement special cases
  // if (resObj.artType === 'devkit-parallax') {
  //   var resUrl = THEME_PREFIX + key + '/';
  //   return {
  //     type: resObj.artType,
  //     config: resObj.config,
  //     url: resUrl
  //   };
  // } else {

  // var manifestEntry = _caManifest[key];
  // var isLocal = manifestEntry && !manifestEntry.isRemote;
  // var resUrl = isLocal
  //     ? (resObj.url || resObj.opts.url || 'resources/communityart/' + key + '.png')
  //     : (manifestEntry && manifestEntry.url);

  // if (!resUrl) {
  //   console.error('Could not determine resUrl for:', key);
  // }

  // var w = resObj.width || getImageWidth(resUrl);
  // var h = resObj.height || getImageHeight(resUrl);

  // return {
  //   type: resObj.artType,
  //   url: resUrl,
  //   w: w,
  //   h: h
  // };

  return resObj;
};
