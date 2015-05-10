var communityart = GC.communityart;

var PREFIX = 'addons/community-art/images_ca/swarm/';

var PLAYER_SIZE = 96;
var ENEMY_0_SIZE = { w: 36, h: 168 };
var ENEMY_1_SIZE = 112;
var ENEMY_2_SIZE = 80;
var LASER_SIZE = 28;
var BOSS_SIZE = 200;
var BOSS_LASER_SIZE = 64;

communityart.registerConfig('swarm/bg', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'bg1.png'
  }
});

communityart.registerConfig('swarm/spaceship', {
  type: 'default',
  opts: {
    url: PREFIX + 'player',
    defaultAnimation: 'fly',
    autoStart: true,
    loop: true,
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    anchorX: PLAYER_SIZE / 2,
    anchorY: PLAYER_SIZE / 2,
    offsetX: PLAYER_SIZE / -2,
    offsetY: PLAYER_SIZE / -2,
    hitBounds: { radius: PLAYER_SIZE / 3 }
  }
});

communityart.registerConfig('swarm/enemy_type0', {
  type: 'default',
  opts: {
    url: PREFIX + 'enemy_type0.png',
    width: ENEMY_0_SIZE.w,
    height: ENEMY_0_SIZE.h,
    anchorX: ENEMY_0_SIZE.w / 2,
    anchorY: ENEMY_0_SIZE.h / 2,
    offsetX: ENEMY_0_SIZE.w / -2,
    offsetY: ENEMY_0_SIZE.h / -2,
    hitBounds: {
      offsetX: ENEMY_0_SIZE.w / -2, offsetY: ENEMY_0_SIZE.h / -2,
      width: ENEMY_0_SIZE.w, height: ENEMY_0_SIZE.h
    }
  }
});

communityart.registerConfig('swarm/enemy_type1', {
  type: 'default',
  opts: {
    url: PREFIX + 'enemy_type1.png',
    width: ENEMY_1_SIZE,
    height: ENEMY_1_SIZE,
    anchorX: ENEMY_1_SIZE / 2,
    anchorY: ENEMY_1_SIZE / 2,
    offsetX: ENEMY_1_SIZE / -2,
    offsetY: ENEMY_1_SIZE / -2,
    hitBounds: { radius: ENEMY_1_SIZE / 2.5 }
  }
});

communityart.registerConfig('swarm/enemy_type2', {
  type: 'default',
  opts: {
    url: PREFIX + 'enemy_type2.png',
    width: ENEMY_2_SIZE,
    height: ENEMY_2_SIZE,
    anchorX: ENEMY_2_SIZE / 2,
    anchorY: ENEMY_2_SIZE / 2,
    offsetX: ENEMY_2_SIZE / -2,
    offsetY: ENEMY_2_SIZE / -2,
    hitBounds: { radius: ENEMY_2_SIZE / 3 }
  }
});

communityart.registerConfig('swarm/laser', {
  type: 'default',
  opts: {
    url: PREFIX + 'laser.png',
    width: LASER_SIZE,
    height: LASER_SIZE * 2.5,
    anchorX: LASER_SIZE,
    anchorY: LASER_SIZE * 2.5 / 2,
    offsetX: LASER_SIZE / -2,
    offsetY: LASER_SIZE * 2.5 / -2,
    hitBounds: { radius: LASER_SIZE / 2 }
  }
});

communityart.registerConfig('swarm/enemy_boss', {
  type: 'default',
  opts: {
    url: PREFIX + 'enemy_boss.png',
    width: BOSS_SIZE,
    height: BOSS_SIZE,
    anchorX: BOSS_SIZE / 2,
    anchorY: BOSS_SIZE / 2,
    offsetX: BOSS_SIZE / -2,
    offsetY: BOSS_SIZE / -2,
    hitBounds: { radius: BOSS_SIZE / 2.2 }
  }
});

communityart.registerConfig('swarm/particleCircle', {
  type: 'default',
  opts: {
    url: PREFIX + 'particleCircle.png',
    width: BOSS_LASER_SIZE,
    height: BOSS_LASER_SIZE,
    anchorX: BOSS_LASER_SIZE / 2,
    anchorY: BOSS_LASER_SIZE / 2,
    offsetX: BOSS_LASER_SIZE / -2,
    offsetY: BOSS_LASER_SIZE / -2,
    hitBounds: { radius: BOSS_LASER_SIZE / 2.5 }
  }
});
