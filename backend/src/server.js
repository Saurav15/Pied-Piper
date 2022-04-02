const express = require('express');
const app = express();
const path = require('path')
require('./config/dbConfig');
const cookieParser = require("cookie-parser")
const loginRoute =  require("./routes/loginRoute")


app.use(express.json())
app.use('/api',loginRoute )
app.use(cookieParser())
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});