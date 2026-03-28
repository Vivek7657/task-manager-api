const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

const taskRoutes = require('./routes/taskRoutes')
app.use("/api/tasks",taskRoutes);

app.get('/', (req, res) => {
    res.send('api running!');
});

app.listen(5000,()=>{
    console.log('server started on port 5000');
})

connectDB();
