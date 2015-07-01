# Community Art

Easy artwork for your devkit games.

## Basic usage

The most basic usage of community art is through the local interfaces provided.

All you have to do is create a `src/communityartConfig.js` file.  This file will be automatically imported by community art at runtime, and provides you with a way to register custom local resources to be used through community art.

You can obtain a reference to the community art exports by using `GC.communityart`.

You can easily add custom configs by using `communityart.registerConfig(key, resource)`.

### Example communityartConfig.js

Writing a communityart config is simple - it's just a bunch of data with a dash of javascript.  Things you will need:

- A reference to communityart: `GC.communityart`
- A name for the config you are registering `bg`
- A type for your config.  This is used to distinguish potentially different use cases for a single asset.  For basic configs this can be something non-descript like 'default'): `ImageView`
- Default opts to be used in the creation of the object (specified by the type): `{ ... }`

Small example config block:
	
	GC.communityart.registerConfig('bg', {
	  type: 'ImageView',
	  opts: {
	    url: 'resources/images/bg.png'
	  }
	});

## Advanced usage

Add some keys to your `manifest.json` file, find some remote keys, let the magic happen.

Coming soon.
