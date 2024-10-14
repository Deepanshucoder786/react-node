const express= require('express');
const cors= require('cors')
const connect= require('./connection')
const user= require('./routes/user')
const app= express();

connect()
app.use(cors())
app.use(user)
app.listen(3000,(err)=>{
    if (err) {
        console.log(err)
        
    } else {
        console.log("server is runinng on 3000")
    }
})


