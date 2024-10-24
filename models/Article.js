const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    paragraph:{
        type:[String],
        required: true,
    },
    img:{
        type:String,
        required: true,
    }
});

const model = mongoose.models.Article || mongoose.model("Article",schema);

module.exports = model;