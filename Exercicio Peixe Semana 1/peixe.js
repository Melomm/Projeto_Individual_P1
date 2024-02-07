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
    this.load.image('fish', 'assets/peixes/0002.png')
    this.load.image('sub', 'assets/Submarino.png')
}

function create () {
    this.add.image(400, 300, 'sea');
    this.add.image(240, 140, 'sub').setScale(0.6);
    this.add.image(400, 525, 'logo').setScale(0.5);

    fishi = this.add.image(100, 100, 'fish').setScale(0.4);
    
}

function update () {
    fishi.x = this.input.x;
    fishi.y = this.input.y;
}