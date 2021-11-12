const express = require('express');
const { reset } = require('nodemon');
const router  =  express.Router();
const Job     = require('../models/Job');

//route geet
router.get('/test',(req,res) => {
    res.send('deu certo');
});

//get
router.get('/add',(req,res) => {
    res.render('add');
});

//add job via post
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, new_job } = req.body;

    //Inserir
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router