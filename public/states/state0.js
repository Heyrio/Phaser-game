var demo = {};
demo.state0 = function(){};
var centerX = 1500/2;
var centerY = 1000/2;
var eve;
var speed = 4;
demo.state0.prototype = {
    preload: function(){
        game.load.image('bg', '../assets/sprites/bg.png')
        game.load.spritesheet('eve','../assets/sprites/char.png', 240,370)
    },
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state0");
        var bg = game.add.sprite(0,0,'bg');
        eve = game.add.sprite(66, centerY+380, 'eve');
        addChangeStateEventListeners();
        game.world.setBounds(0,0,2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        eve.anchor.setTo(0.5, 0.5);
        eve.animations.add('walk', [0,1,2]);
        game.camera.follow(eve);

        game.camera.deadzone = new Phaser.Rectangle(centerX+300, 0 , 600, 1000);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            eve.x +=speed;
            eve.animations.play('walk', 10, true)

        }else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            eve.x -=speed;
            eve.animations.play('walk', 10, true)
        }else{
            eve.animations.stop('walk');
            eve.frame = 0;
        }
    }
}

function changeState(i, stateNum){
    game.state.start('state'+ stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args)
}

function addChangeStateEventListeners(){
        addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}