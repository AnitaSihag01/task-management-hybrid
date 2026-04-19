const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectMongo = async () => {
    try {
        const mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
        console.log('Virtual MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
    }
};

module.exports = connectMongo;