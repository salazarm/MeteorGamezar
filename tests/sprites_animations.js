Crafty.sprite("images/nyan.png", {
  'nyan': [0,0, 16, 16]
});

Crafty.e("2D, DOM, SpriteAnimation, nyan")
    .animate('nyanIdle', 0, 0, 6) //setup animation
    .animate('nyanIdle', 30, -1) // start animation

Crafty.sprite(16, "images/nyan_rainbow.png", {
  'nyanRainbow': [0 ,0, 9, 19]
});

Crafty.e("2D, DOM, SpriteAnimation, nyanRainbow")
    .animate('nyanRainbowWave', 0, 0, 6) //setup animation
    .animate('nyanRainbowWave', 30, -1) // start animation
