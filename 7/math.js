// Author : Md. Shakil Hossen 
// Title : Node Simple Practise 
// Data : 3/14/2022 


// scaffolder 
const math ={};

// random value generate 
math.randomNumber = function randomNumber(max){
    const maximum = max;
    const result = Math.floor(Math.random()*max)
    return result;
}

// export math 
module.exports = math;