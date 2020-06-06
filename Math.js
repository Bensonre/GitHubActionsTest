const simpleMath = {

    add : function (x, y){
        return x + y;
    },
    
    subtract: function (x, y){
        return x - y;
    },

    multiply: function (x,y){
        return x * y;
    },

    divide: function divide(x, y){
        if(y!=0){
            return x/y;
        }
        return undefined;
    },

    remainder: function (x, y){
        if(y!=0){
            return x % y;
        }
        return undefined;
    }
};

module.exports = simpleMath; 