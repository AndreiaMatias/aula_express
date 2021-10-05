const express = require('express');
const app = express();

var usuarios =[
    {
        id: 1,
        name: 'Away'
    },
    {
        id:2,
        name: 'Boça'
    }
]

app.use(express.json())
app.get('/', (req, res) => {
    res.send(usuarios);
});

app.post('/usuarios/adicionar', (req, res) =>{
    usuarios.push(req.body)
    res.send(usuarios)
})


app.listen(3000, () =>
    console.log('Servidor executando')
);
