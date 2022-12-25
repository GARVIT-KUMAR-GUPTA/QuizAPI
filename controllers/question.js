// questions
const getAllQuestions=async (req,res)=>{
    res.send('geAllQ');
}
const getQuestion=async (req,res)=>{
    res.send('get Question');
}
const createQuestion=async (req,res)=>{
    res.send('create question');
}
const deleteQuestion=async (req,res)=>{
    res.send('delete Question');
}
const updateQuestion=async (req,res)=>{
    res.send('update question');
}


module.exports={
    getAllQuestions,
    getQuestion,
    deleteQuestion,
    updateQuestion,
    createQuestion,
}