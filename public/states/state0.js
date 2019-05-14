var demo = {};
demo.state0 = function(){};
var centerX = 1500/2;
var centerY = 1000/2;
var eve;
var speed = 4;
demo.state0.prototype = {
    preload: function(){
        game.load.image('eve', '../assets/sprites/char1.png')
    },
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state0");
        eve = game.add.sprite(centerX, centerY, 'eve');
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        eve.anchor.setTo(0.5, 0.5);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            eve.x +=speed;
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            eve.x -=speed;

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