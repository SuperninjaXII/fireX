var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);
function preload() {
  //background
  this.load.image("background", "../assets/background/sky.jpg");
  this.load.image("platform", "../assets/stage/platform.png");
  //trunks
  this.load.spritesheet(
    "trunks",
    "../assets/characters/Necromancer_creativekind-Sheet.png",
    {
      frameWidth: 128,
      frameHeight: 128,
    },
  );
}
function create() {
  this.add.image(100, 300, "background").setScale(0.35);
  this.add.sprite(100, 300, "trunks").setScale(4);

  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, "platform").setScale(0.5).refreshBody();
}

function update() {
  // Update logic here
}
