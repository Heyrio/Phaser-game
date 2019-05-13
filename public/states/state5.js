demo.state5 = function(){};

demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state5");
        addChangeStateEventListeners();
    },
    update: function(){}
}