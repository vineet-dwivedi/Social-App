require('dotenv').config();
const app = require('./src/app');
const connect = require('./src/config/db')
const PORT = 5000;

connect();
app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})