Crafty.sprite(16, "images/nyan.png", {
  nyan_cat: [0,0]
});

Crafty.e("2D, DOM, SpriteAnimation, nyan_cat")
    .animate('nyan_cat_idle', 0, 0, 6) //setup animation
    .animate('nyan_cat_idle', 30, -1) // start animation
