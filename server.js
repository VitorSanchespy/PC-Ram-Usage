const express = require('express');
const status = require('./index.js')
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send(JSON.stringify(status, null, 2));
});

const PORT = process.env.PORT || 3333;
app.listen(3333, ()=>{
    console.log(`Servidor em execução na porta http://localhost:${PORT}`);
})