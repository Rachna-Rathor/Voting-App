const mongoose=require("mongoose")

const candidateSchema=new mongoose.Schema({
    name:{
        type:String
    },
    partyName:{
        type:String
    },
    vote:{
        type:Number,
        default:0
    }
})


module.exports=mongoose.model("Candidate",candidateSchema);