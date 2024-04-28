const express = require('express');
const {connectToDB}  = require('./db');
const cors = require('cors');
const authRoutes = require('./routes/user');
const PORT=8000;




//initialize app
const app = express();
app.use(cors());
app.use(express.json());
connectToDB();

//routes
app.use('/auth',authRoutes);



app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})