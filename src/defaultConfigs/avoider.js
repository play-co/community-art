var communityart = GC.communityart;

var PREFIX = communityart.IMAGE_PREFIX + 'avoider/';

var PLAYER_SIZE = { w: 64, h: 92 };
var ENEMY_SIZE = { w: 50, h: 56 };

communityart.registerConfig('avoider/starscape', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'background.png'
  }
});

communityart.registerConfig('avoider/rocket_ship', {
  type: 'default',
  opts: {
    url: PREFIX + 'ship.png',
    width: PLAYER_SIZE.w,
    height: PLAYER_SIZE.h,
    anchorX: PLAYER_SIZE.w / 2,
    anchorY: PLAYER_SIZE.h / 2,
    offsetX: PLAYER_SIZE.w / -2,
    offsetY: PLAYER_SIZE.h / -2,
    hitBounds: { radius: PLAYER_SIZE.w / 2 }
  }
});

communityart.registerConfig('avoider/enemy_ship', {
  type: 'default',
  opts: {
    url: PREFIX + 'ufo.png',
    width: ENEMY_SIZE.w,
    height: ENEMY_SIZE.h,
    anchorX: ENEMY_SIZE.w / 2,
    anchorY: ENEMY_SIZE.h / 2,
    offsetX: ENEMY_SIZE.w / -2,
    offsetY: ENEMY_SIZE.h / -2,
    hitBounds: { radius: ENEMY_SIZE.w / 2 }
  }
});
