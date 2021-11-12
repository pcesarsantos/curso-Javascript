const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const Job        = require("./models/Job");
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op; 

const PORT = 3000;

//body pparseer
app.use(bodyParser.urlencoded({extended: false}));

// handle bars
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

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

    let search = req.query.job;
    let query  = '%' + search + '%';

    if(!search) {
        Job.findAll({order:[
            ['CreatedAt','DESC']
        ]})
        .then(jobs => {
            res.render('index',{
                jobs
            });
        });
    } else {
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order:[
            ['CreatedAt','DESC']
        ]})
        .then(jobs => {
            res.render('index',{
                jobs, search
            });
        })
        .catch(err => console.log(err));
    }
    
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));