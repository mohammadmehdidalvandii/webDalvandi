const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    img:{
        type: String,
        required: true
    }
})


const model = mongoose.models.Skill || mongoose.model("Skill", schema);

module.exports = model