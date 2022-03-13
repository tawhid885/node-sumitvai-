const School = require("./school");

const school = new School();

school.on("bellRing", ({period, text})=>{
    console.log(`we need to run! ${period} ${text}`);
})

school.startPeriod();
//register a listener for bellRing


// raise an event
