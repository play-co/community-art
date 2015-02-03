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
