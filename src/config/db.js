const mongo = require('mongoose');
async function connect(){
    await mongo.connect(process.env.MONGO_URI)
    console.log('Connect To DB');
}

module.exports = connect;