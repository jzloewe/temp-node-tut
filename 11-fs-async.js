const { readFile, writeFile } = require("fs")
console.log("start")
readFile("./content/first.txt", 'utf8', (err,result)=>{ 
    // 2nd arg is encoding
    // callback function is the third arg with 2 args
    if (err) {
        console.log(err)
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err,result)=> {
        if (err) {
            console.log(err)
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt", 
            `here is the result : ${first}, ${second}`
        ,(err,result)=>{
            if (err) {
                console.log(err)
                return;
            }
            //console.log(result)
            console.log("done with writing task")
        })
    })
})
console.log("starting next task")
// console.log is out of order, result of offloading task to do later, continue
// speeds up app (can keep serving other users bc offloading)

// alternative to reduce complexity: promises, etc.
// async/await best option