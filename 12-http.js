const http = require("http");

const server = http.createServer((req,res)=>{  // req is incoming request, res is what we send back
    // res.write is res.end that enables continued exe
    if (req.url === '/') { // if homepage
        res.end("welcome to our homepage") // what to display in response
    } else if (req.url === '/about') { // if subpage about
        res.end("here is our short history") // what to display in response
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you are looking for.</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(5000) // port we listen on