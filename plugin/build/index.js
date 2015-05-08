var path = require('path');
var fs = require('fs');

var request = require('request');
var Download = require('download');

var CA_DIR_NAME = 'communityart';
var NIMBUS_URL = 'http://js.io/';

var BASE_DIRECTORY = path.join(__dirname, '..', '..');
var IMAGES_DIRECTORY = path.join(BASE_DIRECTORY, 'images_ca');

// overwritten in onBeforeBuild
var logger = console;

exports.onBeforeBuild = function (devkitAPI, app, config, cb) {
  logger = devkitAPI.logging.get('community-art');
  var communityart = app.manifest.addons ? app.manifest.addons.communityart : null;

  if (communityart) {
    var caKeys = communityart.keys;
    var userID = communityart.userID;
    var nimbusUrl = communityart.server || NIMBUS_URL;

    if (!Array.isArray(caKeys)) throw new Error('communityart.keys must be an array.');
    if (!userID || typeof userID !== 'number') throw new Error('communityart.userID must be a valid number');

    var resourcesDir = app.paths.resources;
    var caDir = path.join(resourcesDir, CA_DIR_NAME);
    // TODO: Temporarily the same?
    var caJsDir = path.join(app.paths.src, CA_DIR_NAME);

    // Check for the community art resource dir
    if (!fs.existsSync(caDir)) {
      fs.mkdirSync(caDir);
    }
    if (!fs.existsSync(caJsDir)) {
      fs.mkdirSync(caJsDir);
    }

    // TODO: load the ca manifest json and read the keys out of that,
    //    ALSO verify that the key exists on the filesystem as well
    var caManifestPath = path.join(caDir, 'communityartManifest.json');
    var caManifest = {};

    // Check for each of the community art keys inside this dir
    var missingKeys = [];

    for (var i = 0; i < caKeys.length; i++) {
      var caKey = caKeys[i];

      // TODO not all are js?
      var keyPath = path.join(caJsDir, caKey + '.js');
      if (!fs.existsSync(keyPath)) {
        logger.log('Missing key:', caKey, keyPath);
        missingKeys.push(caKey);

        caManifest[caKey] = {};
      } else {
        logger.log('Key found:', caKey);
      }
    }

    // Were there any missing keys? If so download
    if (missingKeys.length > 0) {
      request({
          uri: nimbusUrl + 'api/v1/art/resolve/',
          method: 'POST',
          json: {
            userID: userID,
            keys: missingKeys
          }
        }, function(error, res, body) {
          if (error || res.statusCode !== 200 || !body.success) {
            logger.error(error);
            throw new Error('art resolve request to nimbus failed');
          }

          // logger.log('nimbus response:', body);
          var artDownloader = new Download({mode: '755'});
          var _no_downloads_queued = true;

          var keyMap = body.keyMap;
          // for reverse lookups
          var urlMap = {};

          for (var i = 0; i < missingKeys.length; i++) {
            var missingKey = missingKeys[i];
            var missingKeyResponse = keyMap[missingKey];
            missingKeyResponse.ext = path.extname(missingKeyResponse.url);

            if (!missingKeyResponse) {
              logger.warn('key not found in nimbus response:', missingKey);
              continue;
            }
            if (missingKeyResponse.error) {
              logger.warn('error with specific key:', missingKey, missingKeyResponse);
              continue;
            }

            _no_downloads_queued = false;

            var artUrl = missingKeyResponse.url;
            logger.log('> Adding get:', artUrl);
            artDownloader = artDownloader.get(artUrl);
            urlMap[artUrl] = {
              key: missingKey,
              response: missingKeyResponse
            };

            // queue up the js to download as well
            // var jsUrl = artUrl.substring(0, artUrl.lastIndexOf('.')) + '.js';
            // artDownloader = artDownloader.get(jsUrl, caJsDir);
            // urlMap[jsUrl] = {
            //   key: missingKey
            // };

            caManifest[missingKey] = missingKeyResponse;
          }

          if (_no_downloads_queued) {
            logger.error('Unable to download any of the missing keys');
            cb();
            return;
          }

          // TODO: process each of the downloaded files, and create the ca
          //    manifest json file, which contains the community art lookup map
          //    and other infos to be used at runtime

          artDownloader = artDownloader.dest(caDir)
            .run(function (err, files) {
                if (err) {
                  logger.error(err);
                  throw new Error('download missing keys failed');
                }

                //=> [{path: 'foo.zip', url: 'http://example.com/foo.zip', contents: <Buffer 50 4b 03>, ...}, ...]
                logger.log('Download of missing keys complete.');

                // Rename all the files to match their keys
                for (var i = 0; i < files.length; i++) {
                  var file = files[i];
                  var fileDir = path.dirname(file.path);
                  var fileExt = path.extname(file.path);

                  var keyName = urlMap[file.url].key;
                  var destDir = fileExt === '.js' ? caJsDir : caDir;
                  var newFilePath = path.join(destDir, keyName + fileExt);

                  logger.log('> Renaming: ', file.path);
                  try {
                    var newDir = path.dirname(newFilePath);
                    if (!fs.existsSync(newDir)) {
                      fs.mkdirSync(newDir);
                    }

                    fs.renameSync(file.path, newFilePath);
                  } catch (e) {
                    logger.error('Could not rename to:', newFilePath, e);
                  }
                }

                // write out the communityartManifest.json
                fs.writeFileSync(caManifestPath, JSON.stringify(caManifest, null, 4));

                // Finally, lets continue the build
                cb();
            });
        });
    }

  } else {
    logger.warn('No \'communityart\' defined in manifest!');
    cb();
  }
};

exports.getResourceDirectories = function (api, app, config) {
  var dirs = [{
    src: IMAGES_DIRECTORY,
    target: 'images_ca/'
  }];
  return dirs;
};