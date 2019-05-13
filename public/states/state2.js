demo.state2 = function(){};

demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state2");
        addChangeStateEventListeners();
    },
    update: function(){}
}