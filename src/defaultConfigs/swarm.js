var communityart = GC.communityart;

var PREFIX = communityart.IMAGE_PREFIX + 'swarm/';

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
    hitOpts: {
      radius: PLAYER_SIZE / 3
    },
    viewOpts: {
      url: PREFIX + 'player',
      defaultAnimation: 'fly',
      autoStart: true,
      loop: true,
      offsetX: -PLAYER_SIZE / 2,
      offsetY: -PLAYER_SIZE / 2,
      width: PLAYER_SIZE,
      height: PLAYER_SIZE
    }
  }
});

communityart.registerConfig('swarm/enemy_type0', {
  type: 'default',
  opts: {
    hitOpts: {
      offsetX: -ENEMY_0_SIZE.w / 2,
      offsetY: -ENEMY_0_SIZE.h / 2,
      width: ENEMY_0_SIZE.w,
      height: ENEMY_0_SIZE.h
    },
    viewOpts: {
      url: PREFIX + 'enemy_type0.png',
      offsetX: -ENEMY_0_SIZE.w / 2,
      offsetY: -ENEMY_0_SIZE.h / 2,
      width: ENEMY_0_SIZE.w,
      height: ENEMY_0_SIZE.h
    }
  }
});

communityart.registerConfig('swarm/enemy_type1', {
  type: 'default',
  opts: {
    hitOpts: {
      radius: ENEMY_1_SIZE / 2.5
    },
    viewOpts: {
      url: PREFIX + 'enemy_type1.png',
      offsetX: -ENEMY_1_SIZE / 2,
      offsetY: -ENEMY_1_SIZE / 2,
      width: ENEMY_1_SIZE,
      height: ENEMY_1_SIZE
    }
  }
});

communityart.registerConfig('swarm/enemy_type2', {
  type: 'default',
  opts: {
    hitOpts: {
      radius: ENEMY_2_SIZE / 3
    },
    viewOpts: {
      url: PREFIX + 'enemy_type2.png',
      offsetX: -ENEMY_2_SIZE / 2,
      offsetY: -ENEMY_2_SIZE / 2,
      width: ENEMY_2_SIZE,
      height: ENEMY_2_SIZE
    }
  }
});

communityart.registerConfig('swarm/laser', {
  type: 'default',
  opts: {
    hitOpts: {
      radius: LASER_SIZE / 2
    },
    viewOpts: {
      url: PREFIX + 'laser.png',
      offsetX: -LASER_SIZE / 2,
      offsetY: -LASER_SIZE * 2.5 / 2,
      anchorX: LASER_SIZE,
      anchorY: LASER_SIZE * 2.5 / 2,
      width: LASER_SIZE,
      height: LASER_SIZE * 2.5
    }
  }
});

communityart.registerConfig('swarm/enemy_boss', {
  type: 'default',
  opts: {
    hitOpts: {
      radius: BOSS_SIZE / 2.2
    },
    viewOpts: {
      url: PREFIX + 'enemy_boss.png',
      offsetX: -BOSS_SIZE / 2,
      offsetY: -BOSS_SIZE / 2,
      width: BOSS_SIZE,
      height: BOSS_SIZE
    }
  }
});

communityart.registerConfig('swarm/particleCircle', {
  type: 'default',
  opts: {
    hitOpts: {
      radius: BOSS_LASER_SIZE / 2.5
    },
    viewOpts: {
      url: PREFIX + 'particleCircle.png',
      offsetX: -BOSS_LASER_SIZE / 2,
      offsetY: -BOSS_LASER_SIZE / 2,
      width: BOSS_LASER_SIZE,
      height: BOSS_LASER_SIZE
    }
  }
});
