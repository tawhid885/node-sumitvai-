const math ={};

math.randomNumber = function randomNumber(max){
    const maximum = max;
    const result = Math.floor(Math.random()*max)
    return result;
}

module.exports = math;