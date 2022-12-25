const mongoose=require('mongoose')
const questionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please Provide the question']
    },
    result:{
        type: String,
        required:[true,'Please Provide the result']
    },
    answers:[optionSchema],
    topic:{
        type:String,
        required:[true,"Please Provide the topic"]
    }
})
module.exports=mongoose.model('Question',questionSchema);