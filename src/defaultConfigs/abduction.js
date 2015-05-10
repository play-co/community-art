var communityart = GC.communityart;

var PREFIX = 'addons/community-art/images_ca/abduction/';

var PLAYER_SIZE = 130;
var PLATFORM_SIZE = { w: 145, h: 62 };

communityart.registerConfig('abduction/bg', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'background.png'
  }
});

communityart.registerConfig('abduction/platform', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'platform_01.png',
    width: PLATFORM_SIZE.w,
    height: PLATFORM_SIZE.h,
    anchorX: PLATFORM_SIZE.w / 2,
    anchorY: PLATFORM_SIZE.h,
    offsetX: PLATFORM_SIZE.w / -2,
    offsetY: -PLATFORM_SIZE.h,
    hitBounds: {
      offsetX: PLATFORM_SIZE.w / -2, offsetY: -PLATFORM_SIZE.h,
      width: PLATFORM_SIZE.w, height: PLATFORM_SIZE.h
    }
  }
});

communityart.registerConfig('abduction/player', {
  type: 'default',
  opts: {
    url: PREFIX + 'hamster_normal.png',
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    anchorX: PLAYER_SIZE / 2,
    anchorY: PLAYER_SIZE / 2,
    offsetX: PLAYER_SIZE / -2,
    offsetY: PLAYER_SIZE / -2,
    hitBounds: { radius: PLAYER_SIZE / 2 }
  }
});

communityart.registerConfig('abduction/playerChicken', {
  type: 'default',
  opts: {
    url: PREFIX + 'chicken_normal.png'
  }
});
