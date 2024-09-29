const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const config = require('config')

app.get('/', (req, res)=>{
    res.send('My Sample Node.js Application')
})

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})