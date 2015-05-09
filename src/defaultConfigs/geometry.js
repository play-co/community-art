var communityart = GC.communityart;

var PREFIX = 'addons/community-art/images_ca/geometry/';

var BULLET_SIZE = { w: 20, h: 32 };
var ENEMY_SIZE = 64;

communityart.registerConfig('geom/bg', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'bg_backdrop.png'
  }
});

communityart.registerConfig('geom/bg2', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'bg_midground.png'
  }
});

communityart.registerConfig('geom/player', {
  type: 'default',
  opts: {
    url: PREFIX + 'playerTriangle.png',
    anchorX: 32,
    anchorY: 32,
    offsetX: -32,
    offsetY: -32,
    hitBounds: { radius: 32 },
    compositeOperation: 'lighter'
  }
});

communityart.registerConfig('geom/enemy_0', {
  type: 'default',
  opts: {
    url: PREFIX + 'enemyCircle.png',
    width: ENEMY_SIZE,
    height: ENEMY_SIZE,
    anchorX: ENEMY_SIZE / 2,
    anchorY: ENEMY_SIZE / 2,
    offsetX: ENEMY_SIZE / -2,
    offsetY: ENEMY_SIZE / -2,
    hitBounds: { radius: ENEMY_SIZE / 2 },
    compositeOperation: 'lighter'
  }
});

communityart.registerConfig('geom/enemy_1', {
  type: 'default',
  opts: {
    url: PREFIX + 'enemyPentagon.png',
    width: ENEMY_SIZE,
    height: ENEMY_SIZE,
    anchorX: ENEMY_SIZE / 2,
    anchorY: ENEMY_SIZE / 2,
    offsetX: ENEMY_SIZE / -2,
    offsetY: ENEMY_SIZE / -2,
    hitBounds: { radius: ENEMY_SIZE / 2 },
    compositeOperation: 'lighter'
  }
});

communityart.registerConfig('geom/enemy_2', {
  type: 'default',
  opts: {
    url: PREFIX + 'enemyTriangle.png',
    width: ENEMY_SIZE,
    height: ENEMY_SIZE,
    anchorX: ENEMY_SIZE / 2,
    anchorY: ENEMY_SIZE / 2,
    offsetX: ENEMY_SIZE / -2,
    offsetY: ENEMY_SIZE / -2,
    hitBounds: { radius: ENEMY_SIZE / 2 },
    compositeOperation: 'lighter'
  }
});

communityart.registerConfig('geom/laser', {
  type: 'default',
  opts: {
    url: PREFIX + 'laser.png',
    width: BULLET_SIZE.w,
    height: BULLET_SIZE.h,
    anchorX: BULLET_SIZE.w / 2,
    anchorY: BULLET_SIZE.h / 2,
    offsetX: BULLET_SIZE.w / -2,
    offsetY: BULLET_SIZE.h / -2,
    hitBounds: { radius: BULLET_SIZE.w / 2 },
    compositeOperation: 'lighter'
  }
});

communityart.registerConfig('geom/shieldUI', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'shieldUi.png',
    width: 64,
    height: 64,
    compositeOperation: 'lighter'
  }
});

communityart.registerConfig('geom/smokeParticles', {
  type: 'Array',
  opts: [
    PREFIX + 'particles/smoke1.png',
    PREFIX + 'particles/smoke2.png',
    PREFIX + 'particles/smoke3.png',
    PREFIX + 'particles/smoke4.png',
    PREFIX + 'particles/smoke5.png',
    PREFIX + 'particles/smoke6.png'
  ]
});
