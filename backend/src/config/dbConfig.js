const mongoose = require('mongoose');

const uri = process.env.MONGODB_URL;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("DB connected"))
.catch("Unable to connect to DB");