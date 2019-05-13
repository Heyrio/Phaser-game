demo.state9 = function(){};

demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dddddd';
        console.log("you're in state9");
        addChangeStateEventListeners();
    },
    update: function(){}
}