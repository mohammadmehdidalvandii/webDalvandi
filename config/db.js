// connections for dataBase

const mongoose = require("mongoose");
const urlDB = "mongodb://root:Usv5CJgsVe6X9hAi@services.irn8.chabokan.net:12439/?authSource=admin"

const connectToDB = async ()=>{
    try{
    if(mongoose.connections[0].readyState){
        return true;
    }else{
        await mongoose.connect(urlDB);
        console.log("Connect To DB Successfully ✅")
    }
    }catch(err){
        console.log("DB Connection Has Error => " , err)
    }
}

export default connectToDB ;