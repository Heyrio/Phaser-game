//basic template of a state

//main game object


demo.state1 = function(){};

demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#8AFAFA';
        console.log("you're in state1");
        addChangeStateEventListeners();
    },
    update: function(){}
}