const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type : String,
        require: true,
    },
    techs:{
        type: [String],
        require: true,
    },
    description:{
        type: String,
        required: true,
    },
    onlineLink:{
        type: String,
        required: true,
    },
    github:{
        type: String,
        required: true,
    },
    img:{
        type: [String],
        required: true,
    },
    sourceCode:{
        type: String,
        required : true,
    }
});

const model = mongoose.models.Project || mongoose.model("Project" , schema);
module.exports = model;