demo.state3 = function(){};

demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state3");
        addChangeStateEventListeners();
    },
    update: function(){}
}