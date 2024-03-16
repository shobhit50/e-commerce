const mongoose = require("mongoose");

async function connect() {
    try {
        const uri = "mongodb+srv://shobhit:uXw9CSZfLVwBnEwj@cluster0.snn3wbn.mongodb.net/e-commerce?retryWrites=true&w=majority";
        await mongoose.connect(uri);

        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Could not connect to MongoDB...', err);
    }
}

module.exports = connect;