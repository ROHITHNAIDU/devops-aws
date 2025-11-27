const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const config = require('config')

app.get('/', (req, res)=>{
<<<<<<< HEAD
    res.send('Node.js Application, deployed through AWS CI/CD services')
=======
    res.send('Node.js Application, deployed through CI/CD Pipeline')
>>>>>>> df5c00e50bb12c7da6786032143d0d433ffb5056
})

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})
