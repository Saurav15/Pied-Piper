const express = require('express');
const app = express();
const path = require('path')
require('./config/dbConfig');       





const port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});