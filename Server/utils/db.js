const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = async () =>
{
    try
    {
        await mongoose.connect(URI);
        console.log('database connected');

    } catch (error)
    {
        console.log('Database Connection Fail', error);
        process.exit(0);
    }
}

module.exports = connectDb;
