const express = require("express");
const app = express();
const path = require("path");
require("./config/dbConfig");
const cookieParser = require("cookie-parser");
const loginRoute = require("./routes/loginRoute");
const developerRoute = require("./routes/developerRoute");
const projectRoute = require('./routes/projectRoute')
const cors = require("cors");

require("./utils/email/email");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", loginRoute);
app.use("/api", developerRoute);
app.use('/api',projectRoute)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});