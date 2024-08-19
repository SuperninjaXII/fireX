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
  this.load.image("platform", "../assets/stage/ground.png");
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
  const player = this.physics.add.sprite(128, 210, "trunks");
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(100);
  platforms = this.physics.add.staticGroup();
  platforms.create(0, 550, "platform").setScale(2).setOrigin(0, 0);
  //TESTING COLLIDDION
  this.physics.add.collider(player, platforms);
  //player animations
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("trunks", { start: 1, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
}

function update() {
  // Update logic her
  // e
}
