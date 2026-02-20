const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const authRouter = require('./routes/auth.routes');

app.use(express.json());
app.use(cookies());
app.use('/api/auth', authRouter);

module.exports = app;