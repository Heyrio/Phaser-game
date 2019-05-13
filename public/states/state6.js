demo.state6 = function(){};

demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state6");
        addChangeStateEventListeners();
    },
    update: function(){}
}