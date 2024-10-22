const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true,
        },
        email:{
            type: String,
            required: true,
        },
        text:{
            type : String,
            required: true
        }
    }
);

const model = mongoose.models.Message || mongoose.model("Message", schema);

module.exports = model