var path = require('path');

var BASE_DIRECTORY = path.join(__dirname, '..', '..');
var IMAGES_DIRECTORY = path.join(BASE_DIRECTORY, 'images_ca');

exports.getResourceDirectories = function (api, app, config) {
  var dirs = [{
    src: IMAGES_DIRECTORY,
    target: 'images_ca/'
  }];
  return dirs;
};