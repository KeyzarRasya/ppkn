const express = require('express')
const mongoose = require('mongoose')
const ReportModel = require('./model/report')

const app = express();

mongoose.connect('mongodb://localhost:27017/mkb')

let isSent = false;

app.use(express.static('views'))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home', {isSent})
})

app.post('/report', (req, res) => {
    const{kategori, about} = req.body;
    console.log(req.body)
    isSent = true;
    ReportModel.create({
        kategori:kategori,
        about:about
    }).then((result) => {
        res.json(result)
    })
    .catch(err => console.log(err))

})

app.listen(3000, () => {
    console.log('Server on')
})