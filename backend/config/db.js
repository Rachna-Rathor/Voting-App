const mongoose= require("mongoose")

const ConnnectDB= async ()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("mongodb connected")
    } catch (error) {
        console.log("error:" + error);
         process.exit(1);
    }
}

module.exports=ConnnectDB;