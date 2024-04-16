const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const userRouter = require('./routes/userRoute.js');
dotenv.config();
const dbConnect = require('./dbConnect.js');

app.use(cors())
app.use(express.json());
dbConnect();
app.use("/", userRouter); 

app.listen(8000, () => {
    console.log("server up");
});
