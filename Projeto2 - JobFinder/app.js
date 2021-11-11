const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

//body pparseer
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, function() {
    console.log(`O Express esta rodando na porta ${PORT}`);
});

//db connection
db
    .authenticate()
    .then(()=>{
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro aoo conectar", err);
    });

//rotas
app.get('/', (req, res) => {
    res.send("Em execução!");
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));