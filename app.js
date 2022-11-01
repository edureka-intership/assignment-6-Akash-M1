const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


const restRoute=require('./routes/restaurant');
const locRoute=require("./routes/location");
const prodRoute=require("./routes/product");



const app=express();
const PORT=2070;


const MONGO_URI="mongodb://localhost:27017/zomato";


mongoose.connect(MONGO_URI,()=>{
    console.log('connected to db');
},e=>console.log("Error",e));

app.use(bodyParser.json());

app.use('/restaurant',restRoute);
app.use('/location',locRoute);
app.use('/product',prodRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})