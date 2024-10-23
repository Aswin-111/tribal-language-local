console.log(1)


setImmediate(()=>console.log(2))


console.log(3)


let count = 0;
setInterval(()=>{
    console.log(count)
    count = count + 1;
},1000)