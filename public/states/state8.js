demo.state8 = function(){};

demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state8");
        addChangeStateEventListeners();
    },
    update: function(){}
}