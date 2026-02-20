const mongo = require('mongoose');
 async function connect(){
    await mongo.connect(process.env.MONGO_URI)
    console.log('Connected To MONGO')
}
module.exports = connect;