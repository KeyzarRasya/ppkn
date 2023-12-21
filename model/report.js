const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    kategori:String,
    about:String
})

const ReportModel = mongoose.model('ppkn', reportSchema)
module.exports = ReportModel;