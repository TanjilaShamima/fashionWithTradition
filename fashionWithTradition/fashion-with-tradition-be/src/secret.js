const dotenv = require('dotenv');
dotenv.config();

const serverPort = process.env.PORT || 5050
const mongoDBUrl= process.env.MONGO_URL



module.exports = {
    serverPort,
    mongoDBUrl
}