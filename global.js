
//
// console.log(global);

global.setTimeout(()=>{
    console.log("here in timeout");
    clearInterval(clearIntervalFunc)
},3000);

const clearIntervalFunc=setInterval(()=>{
    console.log("here in interval");
},1000);


console.log(__filename);
console.log(__dirname);


