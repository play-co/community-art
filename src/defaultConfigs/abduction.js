var communityart = GC.communityart;

var PREFIX = communityart.IMAGE_PREFIX + 'abduction/';

var PLAYER_SIZE = 130;
var PLATFORM_SIZE = { w: 145, h: 62 };

communityart.registerConfig('abduction/bg', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'background.png'
  }
});

communityart.registerConfig('abduction/platform', {
  type: 'Entity',
  opts: {
    url: PREFIX + 'platform_01.png',
    width: PLATFORM_SIZE.w,
    height: PLATFORM_SIZE.h,
    anchorX: PLATFORM_SIZE.w / 2,
    anchorY: PLATFORM_SIZE.h,
    offsetX: -PLATFORM_SIZE.w / 2,
    offsetY: -PLATFORM_SIZE.h
  }
});

communityart.registerConfig('abduction/player', {
  type: 'Entity',
  opts: {
    hitOpts: {
      offsetX: -PLAYER_SIZE / 4,
      offsetY: -PLAYER_SIZE / 4,
      width: PLAYER_SIZE / 2,
      height: PLAYER_SIZE / 2,
    },
    viewOpts: {
      url: PREFIX + 'hamster_normal.png',
      width: PLAYER_SIZE,
      height: PLAYER_SIZE,
      offsetX: -PLAYER_SIZE / 2,
      offsetY: -PLAYER_SIZE / 2,
    }
  }
});

communityart.registerConfig('abduction/playerChicken', {
  type: 'Entity',
  opts: {
    url: PREFIX + 'chicken_normal.png'
  }
});
