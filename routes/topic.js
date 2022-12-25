const express=require('express');
const { getAllTopics, createTopic, getTopic, updateTopic, deleteTopic } = require('../controllers/topic');
const topicRoute=express.Router();

topicRoute.route('/').get(getAllTopics).post(createTopic);
topicRoute.route('/:id').get(getTopic).patch(updateTopic).delete(deleteTopic);

module.exports=topicRoute 