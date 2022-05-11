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

app.get('/register', (req,res) => {
    let register = path.resolve(__dirname, "./views/register.html");
    res.sendFile(register);
})
app.post('/register', (req,res) => {
    res.send(" se ha procesado el formulario")
})


app.get('/login', (req,res) => {
    let login = path.resolve(__dirname, "./views/login.html");
    res.sendFile(login);
})
app.post('/login', (req,res) => {
    res.send(" se ha iniciado sesión")

})