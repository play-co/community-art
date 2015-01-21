var COMMUNITY_ART_PORTAL = 'resources/uuids/';
var resources = {};

exports = function(uuid) {
  var req = new XMLHttpRequest();

  if (!(uuid in resources)) {
    req.open('get', COMMUNITY_ART_PORTAL + uuid, false);
    req.send();
    resources[uuid] = JSON.parse(req.responseText);
  }

  return resources[uuid];
}
