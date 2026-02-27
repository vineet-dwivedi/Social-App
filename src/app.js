const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const authRouter = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const followRoute = require('./routes/follow.routes');
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(cookies());
app.use('/api/auth', authRouter);
app.use('/api/posts', postRoutes);
app.use('/api/follow', followRoute);

module.exports = app;