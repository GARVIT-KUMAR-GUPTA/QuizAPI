const express=require('express');
const app=express();
const connectDB=require('./db/connectDB');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');
const quesRoute = require('./routes/question');
const topicRoute = require('./routes/topic');
require('dotenv').config()

const PORT=process.env.PORT||5000;


app.use(express.json())
app.use('/api/quiz/v1/question',quesRoute);
app.use('/api/quiz/v1/topic',topicRoute);
app.get('/',(req,res)=>{
    res.send("Welcome to Quiz App"); 
})
const start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,console.log(`Server is running on  ${PORT}`))
    } catch (error) {
         console.log(error);
    }
}
start();

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)