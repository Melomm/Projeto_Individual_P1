var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var fishi;

function preload () {
    this.load.image('sea', 'assets/background.jpg');
    this.load.image('logo', 'assets/logo-inteli_branco.png')
    this.load.image('sub', 'assets/Submarino.png')
    this.load.spritesheet('fish', 'assets/peixes/spreadsheetfish.png', {frameWidth: 631, frameHeight: 631})
}

function create () {
    this.add.image(400, 300, 'sea');
    this.add.image(240, 140, 'sub').setScale(0.6);
    this.add.image(400, 525, 'logo').setScale(0.5);

    fishi = this.add.sprite(100, 100, 'fish').setScale(0.4);
    
    this.anims.create({
        key: 'spin',
        frames: this.anims.generateFrameNumbers('fish', { start: 0, end: 29 }),
        frameRate: 10,
        repeat: -1
    });

    fishi.anims.play('spin', true);
}

function update () {
    fishi.x = this.input.x;
    fishi.y = this.input.y;
}