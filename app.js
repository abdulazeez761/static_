const express = require('express');
const app = express();
const fs = require('fs');
const parsing = express.urlencoded({extended : true});
const  path = require('path');
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'static')))


 app.get('/', (req, res, next)=>{
     res.sendFile(path.join(__dirname,'login.html'))
 })
 app.post('/login', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'form.html'))
 })
 app.post('/forminfo', parsing, (req, res, next)=>{

    const info = req.body
    console.log(info)
    fs.writeFileSync('info.txt',JSON.stringify(info))
    
    res.end()
 })
 app.listen(port, ()=>{
     console.log('listening to the server')
 })