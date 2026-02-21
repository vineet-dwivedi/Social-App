const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const authRouter = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');

app.use(express.json());
app.use(cookies());
app.use('/api/auth', authRouter);
app.use('/api/posts', postRoutes);

module.exports = app;