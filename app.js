const express = require('express');
const app = express();

const path = require('path');

app.use(express.static("public"));

app.listen(3030, ()=>{
    console.log('Running on http://localhost:3030');
})

app.get('/home', (req,res) => {
    let home = path.resolve(__dirname, "./index.html");
    res.sendFile(home);
})