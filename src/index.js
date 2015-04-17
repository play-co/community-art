import ui.resource.loader as loader;
var resourceMap = loader.getMap();

var COMMUNITY_ART_PORTAL = 'resources/uuids/';
var LOCAL_PREFIX = 'addons/community-art/images_ca/';
var THEME_PREFIX = LOCAL_PREFIX + 'themes/';

var candyConfig = {};
var forestConfig = {};
var romanConfig = {};
var shoreConfig = {};
var medievalConfig = {};
var hideoutConfig = {};

try {
  candyConfig = JSON.parse(CACHE[THEME_PREFIX + 'candy_theme/parallax.json']);
  forestConfig = JSON.parse(CACHE[THEME_PREFIX + 'forest_theme/parallax.json']);
  romanConfig = JSON.parse(CACHE[THEME_PREFIX + 'roman_theme/parallax.json']);
  shoreConfig = JSON.parse(CACHE[THEME_PREFIX + 'shore_theme/parallax.json']);
  medievalConfig = JSON.parse(CACHE[THEME_PREFIX + 'medieval_theme/parallax.json']);
  hideoutConfig = JSON.parse(CACHE[THEME_PREFIX + 'hideout_theme/parallax.json']);
} catch(e) {
  logger.log("ERROR LOADING PARALLAX CONFIG:", e);
}

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
  },

  // themes
  candy_theme: {
    type: 'parallax',
    config: candyConfig
  },
  forest_theme: {
    type: 'parallax',
    config: forestConfig
  },
  roman_theme: {
    type: 'parallax',
    config: romanConfig
  },
  shore_theme: {
    type: 'parallax',
    config: shoreConfig
  },
  medieval_theme: {
    type: 'parallax',
    config: medievalConfig
  },
  hideout_theme: {
    type: 'parallax',
    config: hideoutConfig
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
  if (resObj.type === 'parallax') {
    var resUrl = THEME_PREFIX + uuid + '/';
    return {
      type: resObj.type,
      config: resObj.config,
      url: resUrl
    };
  } else {
    var resUrl = LOCAL_PREFIX + resObj.url;
    return {
      type: resObj.type,
      url: resUrl,
      w: getImageWidth(resUrl),
      h: getImageHeight(resUrl)
    };
  }
}
