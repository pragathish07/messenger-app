const express = require('express')
import cors from 'cors'

const clientUrl = 'http://localhost:5173'

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.register(cors,{origin:`${clientUrl}`} )
app.register(userRoutes)

app.listen(port,()=>{
    console.log(`port running on ${port}`);
})