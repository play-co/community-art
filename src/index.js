var COMMUNITY_ART_PORTAL = 'resources/uuids/';
var resources = {
  bg: {
    type: 'image',
    url: 'resources/images/bg.png'
  },
  jumper: {
    type: 'image',
    url: 'resources/images/jumper.png'
  },
  platform: {
    type: 'image',
    url: 'resources/images/platform.png'
  },

  flapping_bee: {
    type: 'sprite',
    url: 'resources/images/bees/yellow/yellowBee'
  },
  flat_forest: {
    type: 'image',
    url: 'resources/images/flat_forest.png'
  },
  foreground: {
    type: 'image',
    url: 'resources/images/foreground.png'
  },
  log: {
    type: 'image',
    url: 'resources/images/log.png'
  },
  hdrop: {
    type: 'image',
    url: 'resources/images/hdrop.png'
  }
};

exports = function(uuid) {
  var req = new XMLHttpRequest();

  if (!(uuid in resources)) {
    req.open('get', COMMUNITY_ART_PORTAL + uuid, false);
    req.send();
    resources[uuid] = JSON.parse(req.responseText);
  }

  return resources[uuid];
}
