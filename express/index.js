//Importing express and cors
const express = require('express');
const cors = require('cors');
//Importing Database config 'Sequelize' and models 'init-models'
const sequelize = require('./Sequelize');
let initModels = require("../models/init-models");
const section = require('../models/section');
//initModels lets us request from any model without needing to 
//to import it.
let models = initModels(sequelize);
//CORS configure
const corsOptions = [
    'http://localhost:3000'
]
//PORT Number
const PORT = 5500;

const app = express();
//Middleware
app.use(express.json());
//app.use(cors({
//    origin:corsOptions
//}));

//API config
app.get('/chapter',async (req,res) => {
    const chapter = await models.chapter.findAll({
        attributes:["id","title","number","hadis_range","book_name"]
    });
    res.status(200).json(chapter);
})

app.get('/hadith',async (req,res) => {
    const hadith = await models.hadith.findAll({
        attributes:['hadith_id','book_id','book_name','chapter_id','section_id','narrator','bn','ar','ar_diacless','note','grade_id','grade','grade_color']
    });
    res.status(200).json(hadith);
});

app.get('/books',async (req,res) => {
    const books = await models.books.findAll({
        attributes:['id','title','title_ar','number_of_hadis','abvr_code','book_name','book_descr']
    });
    res.status(200).json(books);
})

app.get('/section',async (req,res) => {
    const sections = await models.section.findAll({
        attributes:['section_id','title','preface','number']
    });
    res.status(200).json(sections);
})

app.get('/hadith/sections',async (req,res) => {
    const [results,metadata] = await sequelize.query(`SELECT hadith.hadith_id,hadith.section_id,section.section_id,narrator,bn,ar,ar_diacless,number,title,preface,grade,grade_color FROM hadith,section where section.section_id = hadith.section_id`,{
        raw:true,
    });
    res.status(200).json(results);
})

app.listen(PORT,() => {
    console.log(`Listening on PORT:${PORT}`)
})

