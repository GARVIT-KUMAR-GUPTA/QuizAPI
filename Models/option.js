const mongoose=require('mongoose')
const optionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please Provide the option']
    },
    description:{
        type: String,
        required:[true,'Please Provide the description of option']
    },
    isCorrect:{
        type: Boolean,
        default:false,
    }
})
module.exports=mongoose.model('Option',optionSchema);