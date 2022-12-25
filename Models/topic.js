const mongoose=require('mongoose')
const topicSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please Provide the question']
    },
    questions:[questionSchema]
})
module.exports=mongoose.model('Topic',topicSchema);