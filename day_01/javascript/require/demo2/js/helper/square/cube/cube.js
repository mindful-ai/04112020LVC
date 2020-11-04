define(['../square', '../../sub'], function(square, sub) { 
    return { 
        cu: function(a){ return square.sq(sub.sub(a, 5)) ** 3; } 
    };
    
})