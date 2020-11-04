define(['add', 'sub', 'mul','div'], function(add, sub, mul, div){
    return {
        getresult: function(option, opa, opb){
            switch(option){
                case "add": return add.add(opa, opb);
                case "sub": return sub.sub(opa, opb);
                case "mul": return mul.mul(opa, opb);
                case "div": return div.div(opa, opb);
            }
        }
    }

})


