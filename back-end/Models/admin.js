let mongoose = require('mongoose')

const Schema = mongoose.Schema

const  Card = new Schema({
    title:String ,
    image: String,
    description:String,


   
})


module.exports = mongoose.model('cards',Card)