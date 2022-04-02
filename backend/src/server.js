const express = require('express');
const app = express();
const path = require('path')
require('./config/dbConfig');
const cookieParser = require("cookie-parser")
const loginRoute =  require("./routes/loginRoute")
const developerRoute = require("./routes/developerRoute")
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api',loginRoute )
app.use('/api', developerRoute)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});