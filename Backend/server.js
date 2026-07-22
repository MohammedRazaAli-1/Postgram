const app = require('./src/App');

const connectDB = require('./src/db/db');

const dns = require('dns');

dns.setServers(['8.8.8.8'])

connectDB()

app.listen(3000 , ()=>{

    console.log("server is running on port : 3000")
    
})