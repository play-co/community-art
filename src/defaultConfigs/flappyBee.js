var communityart = GC.communityart;

var PREFIX = communityart.IMAGE_PREFIX + 'flappybee/';

var PLAYER_SIZE = { w: 80, h: 75 };
var LOG_SIZE = { w: 125, h: 1024 };
var HONEY_SIZE = 69;
var POWERUP_SIZE = 90;

communityart.registerConfig('flappybee/instructions', {
  type: 'ImageView',
  config: {
    url: PREFIX + 'instructions.png',
    anchorX: 500 / 2,
    anchorY: 500 / 2,
    offsetX: 500 / -2,
    offsetY: 500 / -2,
  }
});

communityart.registerConfig('flappybee/log', {
  type: 'Entity',
  config: {
    url: PREFIX + 'themes/forest_theme/wall__1.png',
    width: LOG_SIZE.w,
    height: LOG_SIZE.h,
    hitOpts: {
      offsetX: 2,
      offsetY: 25,
      width: LOG_SIZE.w - 12,
      height: LOG_SIZE.h - 50
    }
  }
});

communityart.registerConfig('flappybee/honeyDrop', {
  type: 'Entity',
  config: {
    width: HONEY_SIZE,
    height: HONEY_SIZE,
    hitOpts: {
      radius: HONEY_SIZE / 3
    },
    viewOpts: {
      url: PREFIX + 'hdrop.png',
      offsetX: HONEY_SIZE / -2,
      offsetY: HONEY_SIZE / -2,
    }
  }
});

// ---- TEXT ---- //

var scoreTextData = { '/': { image: PREFIX + 'numbers/num_slash.png' } };
for (var i = 0; i < 10; i++) {
  scoreTextData[i] = { image: PREFIX + 'numbers/num_' + i + '.png' };
}
communityart.registerConfig('flappybee/scoreText', {
  type: 'ScoreView',
  opts: {
    characterData: scoreTextData,
    width: 300,
    height: 68,
    anchorX: 150,
    anchorY: 34,
    offsetX: -150,
    offsetY: -34
  }
});

// ---- POWERUPS ---- //

var powerupTypes = ['grow', 'mag', 'wand'];

for (var i = 0; i < powerupTypes.length; i++) {
  var powerupType = powerupTypes[i];

  communityart.registerConfig('flappybee/powerup/' + powerupType, {
    type: 'Entity',
    config: {
      width: POWERUP_SIZE,
      height: POWERUP_SIZE,
      hitOpts: {
        radius: POWERUP_SIZE / 2
      },
      viewOpts: {
        url: PREFIX + 'powerup_' + powerupType + '.png',
        offsetX: POWERUP_SIZE / -2,
        offsetY: POWERUP_SIZE / -2
      }
    }
  });
}

// ---- BEES ---- //

var beeTypes = ['blue', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

for (var i = 0; i < beeTypes.length; i++) {
  var beeType = beeTypes[i];

  communityart.registerConfig('flappybee/bee/' + beeType, {
    type: 'Entity',
    config: {
      width: PLAYER_SIZE.w,
      height: PLAYER_SIZE.h,
      hitOpts: {
        radius: PLAYER_SIZE.w / 2.2
      },
      viewOpts: {
        url: PREFIX + 'bees/' + beeType + '/' + beeType + 'Bee',
        defaultAnimation: 'flap',
        autoStart: true,
        loop: true,
        offsetX: PLAYER_SIZE.w / -2,
        offsetY: PLAYER_SIZE.h / -2
      }
    }
  });
}

// ---- PARALLAX THEMES ---- //

communityart.registerConfig('flappybee/parallax/forest', {
  type: 'ParallaxConfig',
  config: [
    {
      "id": "bg",
      "xMultiplier": 0.05,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        { "image": PREFIX + "themes/forest_theme/bg_back.png" }
      ]
    },
    {
      "id": "trees",
      "xMultiplier": 0.4,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [200, 500],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        { "image": PREFIX + "themes/forest_theme/tree__1.png" },
        { "image": PREFIX + "themes/forest_theme/tree__2.png" },
        { "image": PREFIX + "themes/forest_theme/tree__3.png" }
      ]
    },
    {
      "id": "bushes",
      "xMultiplier": 0.6,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [200, 500],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/forest_theme/bush__1.png",
          "yAlign": "bottom",
          "y": 930
        },
        {
          "image": PREFIX + "themes/forest_theme/bush__2.png",
          "yAlign": "bottom",
          "y": 930
        },
        {
          "image": PREFIX + "themes/forest_theme/bush__3.png",
          "yAlign": "bottom",
          "y": 930
        },
        {
          "image": PREFIX + "themes/forest_theme/bush__4.png",
          "yAlign": "bottom",
          "y": 930
        },
        {
          "image": PREFIX + "themes/forest_theme/bush__5.png",
          "yAlign": "bottom",
          "y": 930
        }
      ]
    },
    {
      "id": "hills",
      "xMultiplier": 0.8,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/forest_theme/bg_front.png"
        }
      ]
    }
  ]
});

communityart.registerConfig('flappybee/parallax/medieval', {
  type: 'ParallaxConfig',
  config: [
    {
      "xMultiplier": 0,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/medieval_theme/sky.png",
          "width": 1024,
          "height": 650
        }
      ]
    },
    {
      "xMultiplier": 0.05,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [0, 200],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/medieval_theme/cloud1.png",
          "styleRanges": { "y": [ 0, 500 ], "scale": [ 1, 2 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud2.png",
          "styleRanges": { "y": [ 0, 500 ], "scale": [ 1, 2 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud3.png",
          "styleRanges": { "y": [ 0, 500 ], "scale": [ 1, 2 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud4.png",
          "styleRanges": { "y": [ 0, 500 ], "scale": [ 1, 2 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud5.png",
          "styleRanges": { "y": [ 0, 500 ], "scale": [ 1, 2 ] }
        }
      ]
    },
    {
      "xMultiplier": 0.1,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [0, 200],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/medieval_theme/cloud1.png",
          "styleRanges": { "y": [ 0, 500 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud2.png",
          "styleRanges": { "y": [ 0, 500 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud3.png",
          "styleRanges": { "y": [ 0, 500 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud4.png",
          "styleRanges": { "y": [ 0, 500 ] }
        },
        {
          "image": PREFIX + "themes/medieval_theme/cloud5.png",
          "styleRanges": { "y": [ 0, 500 ] }
        }
      ]
    },
    {
      "xMultiplier": 0.1,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/medieval_theme/farground_mountain.png",
          "y": 550
        }
      ]
    },
    {
      "xMultiplier": 0.25,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [50, 400],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/medieval_theme/farground_tower1.png",
          "yAlign": "bottom",
          "y": 720
        },
        {
          "image": PREFIX + "themes/medieval_theme/farground_tower2.png",
          "yAlign": "bottom",
          "y": 720
        },
        {
          "image": PREFIX + "themes/medieval_theme/farground_tower3.png",
          "yAlign": "bottom",
          "y": 720
        },
        {
          "image": PREFIX + "themes/medieval_theme/farground_tower4.png",
          "yAlign": "bottom",
          "y": 720
        }
      ]
    },
    {
      "xMultiplier": 0.4,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "y": 670,
          "image": PREFIX + "themes/medieval_theme/farground_wall.png"
        }
      ]
    },
    {
      "xMultiplier": 0.6,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/medieval_theme/midground_brush.png"
        }
      ]
    }
  ]
});

communityart.registerConfig('flappybee/parallax/candy', {
  type: 'ParallaxConfig',
  config: [
    {
      "xMultiplier": 0.1,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        { "image": PREFIX + "themes/candy_theme/background.png" }
      ]
    },
    {
      "xMultiplier": 0.4,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/candy_theme/foreground.png"
        }
      ]
    },
    {
      "xMultiplier": 0.5,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [0, 600],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "ordered": true,
      "pieceOptions": [
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/candy_theme/big_lollipop.png",
          "styleRanges": { "scale": [0.5, 1] },
          "anchorY": 961
        },
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/candy_theme/small_lollipops.png",
          "styleRanges": { "scale": [0.5, 1] },
          "anchorY": 925
        }
      ]
    },
    {
      "xMultiplier": 0.7,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [0, 600],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "ordered": true,
      "pieceOptions": [
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/candy_theme/small_lollipops.png",
          "styleRanges": { "scale": [0.5, 1] },
          "anchorY": 925
        }
      ]
    }
  ]
});

communityart.registerConfig('flappybee/parallax/hideout', {
  type: 'ParallaxConfig',
  config:[
    {
      "xMultiplier": 0.05,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/hideout_theme/background.png",
          "width": 1456,
          "height": 1024
        }
      ]
    },
    {
      "xMultiplier": 0.1,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/hideout_theme/background_cave.png"
        }
      ]
    },
    {
      "xMultiplier": 0.15,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/hideout_theme/background_gold.png",
          "width": 1456,
          "height": 1024
        }
      ]
    },
    {
      "xMultiplier": 0.2,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/hideout_theme/foreground_cave.png",
          "width": 1456,
          "height": 1024
        }
      ]
    },
    {
      "xMultiplier": 0.3,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/hideout_theme/foreground_gold.png",
          "width": 1456,
          "height": 1024
        }
      ]
    },
    {
      "xMultiplier": 0.3,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [ 200, 1000 ],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/hideout_theme/ray1.png",
          "width": 711,
          "height": 1024
        },
        {
          "image": PREFIX + "themes/hideout_theme/ray2.png",
          "width": 640,
          "height": 1024
        }
      ]
    }
  ]
});

communityart.registerConfig('flappybee/parallax/ocean', {
  type: 'ParallaxConfig',
  config: [
    {
      "xMultiplier": 0,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/ocean_theme/sky.png",
          "width": 1024,
          "height": 650
        }
      ]
    },
    {
      "xMultiplier": 0.1,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [50, 400],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/ocean_theme/cloud1.png",
          "styleRanges": { "y": [ 0, 600 ] }
        },
        {
          "image": PREFIX + "themes/ocean_theme/cloud2.png",
          "styleRanges": { "y": [ 0, 600 ] }
        },
        {
          "image": PREFIX + "themes/ocean_theme/cloud3.png",
          "styleRanges": { "y": [ 0, 600 ] }
        }
      ]
    },
    {
      "xMultiplier": 0,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/ocean_theme/background_ocean.png",
          "y": 1024,
          "yAlign": "bottom",
          "height": 400
        }
      ]
    },
    {
      "xMultiplier": 0.15,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [50, 400],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/ocean_theme/mountain1.png",
          "yAlign": "bottom",
          "y": 650
        },
        {
          "image": PREFIX + "themes/ocean_theme/mountain2.png",
          "yAlign": "bottom",
          "y": 650
        },
        {
          "image": PREFIX + "themes/ocean_theme/mountain3.png",
          "yAlign": "bottom",
          "y": 650
        },
        {
          "image": PREFIX + "themes/ocean_theme/volcano.png",
          "yAlign": "bottom",
          "y": 650
        }
      ]
    },
    {
      "xMultiplier": 0.3,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [200, 600],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/ocean_theme/island_large.png",
          "yAlign": "bottom",
          "xAlign": "left",
          "styleRanges": { "y": [ 700, 800 ], "scale": [ 0.8, 1.2 ] }
        },
        {
          "image": PREFIX + "themes/ocean_theme/island_small.png",
          "xAlign": "left",
          "yAlign": "bottom",
          "styleRanges": { "y": [ 700, 800 ], "scale": [ 0.8, 1.2 ] }
        }
      ]
    }
  ]
});

communityart.registerConfig('flappybee/parallax/roman', {
  type: 'ParallaxConfig',
  config: [
    {
      "xMultiplier": 0.2,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        { "image": PREFIX + "themes/roman_theme/bg_back.png" }
      ]
    },
    {
      "xMultiplier": 0.4,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [50, 400],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/roman_theme/cloud_1.png",
          "styleRanges": { "y": [ 0, 600 ] }
        },
        {
          "image": PREFIX + "themes/roman_theme/cloud_2.png",
          "styleRanges": { "y": [ 0, 600 ] }
        },
        {
          "image": PREFIX + "themes/roman_theme/cloud_3.png",
          "styleRanges": { "y": [ 0, 600 ] }
        }
      ]
    },
    {
      "xMultiplier": 0.8,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/roman_theme/bg_front.png"
        }
      ]
    }
  ]
});

communityart.registerConfig('flappybee/parallax/shore', {
  type: 'ParallaxConfig',
  config: [
    {
      "xMultiplier": 0,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/shore_theme/sky.png",
          "width": 1024,
          "height": 650
        }
      ]
    },
    {
      "xMultiplier": 0.15,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [50, 400],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/shore_theme/cloud1.png",
          "styleRanges": { "y": [ 0, 600 ] }
        },
        {
          "image": PREFIX + "themes/shore_theme/cloud2.png",
          "styleRanges": { "y": [ 0, 600 ] }
        },
        {
          "image": PREFIX + "themes/shore_theme/cloud3.png",
          "styleRanges": { "y": [ 0, 600 ] }
        }
      ]
    },
    {
      "xMultiplier": 0.2,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [50, 400],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/shore_theme/hill1.png",
          "yAlign": "bottom",
          "y": 650
        },
        {
          "image": PREFIX + "themes/shore_theme/hill2.png",
          "yAlign": "bottom",
          "y": 650
        },
        {
          "image": PREFIX + "themes/shore_theme/hill3.png",
          "yAlign": "bottom",
          "y": 650
        },
        {
          "image": PREFIX + "themes/shore_theme/hill4.png",
          "yAlign": "bottom",
          "y": 650
        }
      ]
    },
    {
      "xMultiplier": 0.4,
      "xCanSpawn": true,
      "xCanRelease": true,
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "y": 1024,
          "yAlign": "bottom",
          "image": PREFIX + "themes/shore_theme/shore.png"
        }
      ]
    },
    {
      "xMultiplier": 0.4,
      "xCanSpawn": true,
      "xCanRelease": true,
      "xGapRange": [50, 400],
      "yMultiplier": 0,
      "yCanSpawn": false,
      "yCanRelease": false,
      "pieceOptions": [
        {
          "image": PREFIX + "themes/shore_theme/bush1.png",
          "yAlign": "bottom",
          "y": 750
        },
        {
          "image": PREFIX + "themes/shore_theme/bush2.png",
          "yAlign": "bottom",
          "y": 750
        },
        {
          "image": PREFIX + "themes/shore_theme/bush3.png",
          "yAlign": "bottom",
          "y": 750
        },
        {
          "image": PREFIX + "themes/shore_theme/cave.png",
          "yAlign": "bottom",
          "y": 750
        }
      ]
    }
  ]
});
