

const express =require('express')

const dotEnv=require('dotenv')

const mongoose =require('mongoose')

const bodyParser= require('body-parser')

const transactionRoutes = require('./routes/transactions');
const categoryRoutes = require('./routes/categories');

dotEnv.config()

const app= express()

app.use(bodyParser.json());



mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Mongo DB connection successful')
    })
    .catch((error)=>{
        console.log('error',error);
        
    })




// Routes
app.use('/transactions', transactionRoutes);
app.use('/categories', categoryRoutes);





const PORT = process.env.PORT || 3005

app.listen(PORT,()=>{
    console.log(`sever started at ${PORT}`);
    
})