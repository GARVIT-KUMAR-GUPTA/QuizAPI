const express=require('express');
const { getAllQuestions, createQuestion, getQuestion, updateQuestion, deleteQuestion } = require('../controllers/question');
const quesRoute=express.Router();

quesRoute.route('/').get(getAllQuestions).post(createQuestion);
quesRoute.route('/:id').get(getQuestion).patch(updateQuestion).delete(deleteQuestion);

module.exports=quesRoute