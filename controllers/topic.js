// topic
const getAllTopics=async (req,res)=>{
    res.send('get all topics');
}
const getTopic=async (req,res)=>{
    res.send('get a topic');
}
const createTopic=async (req,res)=>{
    res.send('create Topic');
}
const deleteTopic=async (req,res)=>{
    res.send('delete topic');
}
const updateTopic=async (req,res)=>{
    res.send('update Topic');
}

module.exports={
    getAllTopics,
    getTopic,
    updateTopic,
    deleteTopic,
    createTopic
}