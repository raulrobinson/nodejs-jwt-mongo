require('dotenv').config();

const USER_DB = process.env.USR_MONGODB;
const PASS_DB = process.env.PSW_MONGODB;
const HOST_DB = process.env.URL_MONGODB;

module.exports = {
    //url: `mongodb+srv://${USER_DB}:${PASS_DB}@${HOST_DB}/?retryWrites=true&w=majority`
    url: `mongodb://${USER_DB}:${PASS_DB}@${HOST_DB}?authSource=admin`
};
