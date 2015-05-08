# Community Art

Easy artwork for your devkit games.

### Basic usage

The most basic usage of community art is through the local interfaces provided.

All you have to do is create a `src/communityartConfig.js` file.  This file will be automatically imported by community art at runtime, and provides you with a way to register custom local resources to be used through community art.

You can obtain a reference to the community art exports by using `GC.communityart`.

You can easily add custom configs by using `communityart.registerConfig(key, resource)`.

### Advanced usage

Add some keys to your `manifest.json` file, find some remote keys, let the magic happen.

Coming soon.
