demo.state7 = function(){};

demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state7");
        addChangeStateEventListeners();
    },
    update: function(){}
}