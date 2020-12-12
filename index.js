const app = require('express')()
const http = require('http').createServer(app)

app.get('/',(req,res)=>{
				res.send('Node server is running, Yay!')
})

http.listen(8000,function(){
				console.log('server is listened on port 8000')
})
