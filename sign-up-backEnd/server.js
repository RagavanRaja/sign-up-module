const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotENV=require('dotenv');
const routesURL=require('./routes/routes');
const cors=require('cors');

//activate dotenv package
dotENV.config()
//connect with MOngo DB database 
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Data Base Connected"));
//its a body parser:body parser used to acces the data of post request
app.use(express.json());
app.use(cors());
//connect every req url to routes
app.use('/app',routesURL);
app.listen(4000,()=>console.log('Server is running'));