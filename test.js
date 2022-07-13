var http = require ('http')
var log = require('./log.js')
var sayHello = require('./exportDemo')

http.createServer(function(request,response){
    // response.writeHead(200, {'Content-Type':'text/html'})
    console.log(request.url)
    if(request.url=="/admin"){
        response.writeHead(200,{'Content-Type': 'text/html'})
        response.write('<html><body><strong>Admin Page</strong></body></html>')
    }else if(request.url=="/"){
        response.writeHead(200,{'Content-Type': 'text/html'})
        response.write('<html><body><strong>Home Page</strong></body></html>')
    }else if(request.url=="/customer"){
        response.writeHead(200,{'Content-Type': 'application/json'})
        response.write(JSON.stringify({name:'Ömer', lastname:'Yıldırım'}))
    }
    response.end('Hello Aleyna')
}).listen(8080)


log.information('server will go live')
console.log(sayHello())
