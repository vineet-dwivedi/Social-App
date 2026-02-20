require('dotenv').config();
const app = require('./src/app');
const PORT = 3000;
const connect = require('./src/config/db')

connect();
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})