const mongoose = require('mongoose');

const connectToDB =()=>{
    try {
        mongoose.connect(`mongodb://0.0.0.0:27017/instagram`);
        console.log("Connected DB");
    } catch (error) {
        console.log(error);
        console.log("Failed to Connect to DB");
    }
}

module.exports = {connectToDB};