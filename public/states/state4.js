demo.state4 = function(){};

demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state4");
        addChangeStateEventListeners();
    },
    update: function(){}
}