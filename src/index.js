import ui.resource.loader as loader;
var resourceMap = loader.getMap();

var COMMUNITY_ART_PORTAL = 'resources/uuids/';
var LOCAL_PREFIX = 'addons/community-art/images_ca/';

var resources = {
  bg: {
    type: 'image',
    url: 'bg.png'
  },
  jumper: {
    type: 'image',
    url: 'jumper.png'
  },
  platform: {
    type: 'image',
    url: 'platform.png'
  },

  flapping_bee: {
    type: 'sprite',
    url: 'bees/yellow/yellowBee'
  },
  flat_forest: {
    type: 'image',
    url: 'flat_forest.png'
  },
  foreground: {
    type: 'image',
    url: 'foreground.png'
  },
  log: {
    type: 'image',
    url: 'log.png'
  },
  hdrop: {
    type: 'image',
    url: 'hdrop.png'
  }
};

// return the width of an image asset
var getImageWidth = function(url) {
    var map = resourceMap[url];
    var width = 0;
    if (map) {
        width = map.w + map.marginLeft + map.marginRight;
    }
    return width;
};

// return the height of an image asset
var getImageHeight = function(url) {
    var map = resourceMap[url];
    var height = 0;
    if (map) {
        height = map.h + map.marginTop + map.marginBottom;
    }
    return height;
};

exports = function(uuid) {
  var req = new XMLHttpRequest();

  if (!(uuid in resources)) {
    req.open('get', COMMUNITY_ART_PORTAL + uuid, false);
    req.send();
    resources[uuid] = JSON.parse(req.responseText);
  }

  var resObj = resources[uuid];
  var resUrl = LOCAL_PREFIX + resObj.url;
  return {
    type: resObj.type,
    url: resUrl,
    w: getImageWidth(resUrl),
    h: getImageHeight(resUrl)
  };
}
