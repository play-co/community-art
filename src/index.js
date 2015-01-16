var images = {
  'splash': 'resources/images/splash.png',
  'bg': 'resources/images/bg.png',
  'alpaca': 'resources/images/alpaca.png'
}

exports = function(resource) {
  return images[resource];  
}
